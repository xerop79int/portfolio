import { Column, Flex, Heading } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL } from '@/app/resources'
import { blog, person } from '@/app/resources/content';
import { getPosts } from '@/app/utils/utils'; // Make sure this is correctly importing your posts

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// You may need to update your getPosts utility to handle .md files instead of .mdx
// This is a common issue when switching from MDX to MD

export default function Blog() {
  // Check if posts are being loaded correctly
  console.log('Posts loaded:', getPosts(['src', 'app', 'blog', 'posts']));
  
  return (
    <Column >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              '@type': 'Person',
              name: person.name,
              image: {
                '@type': 'ImageObject',
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading
        marginBottom="l"
        variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column
        fillWidth flex={1}>
        <Posts range={[1,3]} thumbnail/>
        <Posts range={[4]} columns="2"/>
      </Column>
    </Column>
  );
}