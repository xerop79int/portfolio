import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Team = {
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
};

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tags?: string | string[];  // Fix: Allow tag to be a string or array
    team: Team[];
    link?: string;
};

function getMDXFiles(dir: string) {
    if (!fs.existsSync(dir)) {
        console.warn(`Directory not found: ${dir}`);
        return [];
    }

    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    // Read the file content
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    
    // Use gray-matter to parse the frontmatter, preserving the content
    const { data, content } = matter(rawContent, {
        engines: {
            yaml: {
                parse: (str) => require('js-yaml').load(str)
            }
        }
    });

    // Preserve code blocks by ensuring they're not processed as YAML
    // The content is preserved as-is and will be rendered by MDXRemote
    
    // Normalize metadata
    const metadata: Metadata = {
        title: data.title || '',
        publishedAt: data.publishedAt || new Date().toISOString(),
        summary: data.summary || '',
        image: data.image || undefined,
        images: Array.isArray(data.images) ? data.images : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        team: Array.isArray(data.team) ? data.team : [],
        link: data.link || undefined,
    };

    return { metadata, content };
}

function getMDXData(dir: string) {
    try {
        const mdxFiles = getMDXFiles(dir);
        return mdxFiles.map((file) => {
            try {
                const { metadata, content } = readMDXFile(path.join(dir, file));
                const slug = path.basename(file, path.extname(file));

                console.log(metadata)

                return {
                    metadata,
                    slug,
                    content, // Preserving the raw content with code blocks
                };
            } catch (error) {
                console.error(`Error processing file ${file}:`, error);
                return {
                    metadata: {
                        title: 'Error loading content',
                        publishedAt: new Date().toISOString(),
                        summary: 'There was an error loading this content.',
                        images: [],
                        team: [],
                    } as Metadata,
                    slug: path.basename(file, path.extname(file)),
                    content: '',
                };
            }
        });
    } catch (error) {
        console.error('Error getting MDX data:', error);
        return [];
    }
}

export function getPosts(customPath: string[] = ['', '', '', '']) {
    // Filter out empty strings from path to prevent invalid path issues
    const filteredPath = customPath.filter(segment => segment !== '');
    const postsDir = path.join(process.cwd(), ...filteredPath);
    return getMDXData(postsDir);
}