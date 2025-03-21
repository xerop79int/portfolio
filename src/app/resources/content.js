import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Muhammad Fahad',
    lastName:  'Murtaza',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Pakistan',
    languages: ['English', 'Urdu']
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/xerop79int',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/muhammad-fahad-murtaza-8533b421a/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:fahadmurtaza021@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Developer</>,
    subline: <>I'm Fahad, a full stack developer at <InlineCode>Zigron</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/fahad-murtaza-153ba2/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Experienced Software Developer adept in bringing forth expertise in design, installation, testing and
        maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various
        platforms, languages, and embedded systems. Experienced with the latest cutting edge development
        tools and procedures. Able to effectively self-manage during independent projects, as well as
        collaborate as part of a productive team</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Zigron',
                timeframe: 'Jan 2024 - Present',
                role: 'Full Stack Developer (Previously Backend Developer)',
                achievements: [
                    <>Developed a RESTful API that allowed the app to integrate with backend services, resulting in
                    enhanced user experience</>,
                    <>Developed a RESTful API to enable communication between the website and the backend services
                    Implemented a REST API using Node.js that allowed for efficient data exchange between the web
                    application and the backend database.</>,
                    <>
                    Developed a secure authentication system that met industry standards for data protection and
                    privacy
                    </>,
                    <>
                    Developed a real-time AI Chat/Agent feature for the application using WebSockets
                    </>
                ],
                images: []
            },
            {
                company: 'Triomatic Solutions',
                timeframe: 'Oct 2022 - Nov 2023',
                role: 'Full Stack Developer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            },
            {
                company: 'AirOverflow',
                timeframe: 'April 2022 - Sep 2023',
                role: 'Full Stack Developer',
                achievements: [
                    <> Implemented a microservices architecture that improved system modularity and reduced dependencies between components</>,
                    <> Refactored legacy code to improve reliability, scalability and maintainability</>,
                    <>
                    Developed and maintained a CTF platform for the company which was used by the company to host CTF events for the PCC 2022. 
                    </>
                ],
                images: [ ]
            },
            {
                company: 'OctalSol',
                timeframe: 'Oct 2020 - Feb 2022',
                role: 'Full Stack Developer (Promoted From Frontend Developer)',
                achievements: [
                    <>
                     Implemented performance improvements in both frontend and backend systems, resulting in faster load times and improved 
                     application efficiency.
                    </>,
                    <> 
                    Implemented a microservices architecture that improved system modularity and reduced dependencies between components
                    </>,
                    <>
                    Identified and resolved complex technical issues, ensuring smooth system operations and minimizing downtime.
                    </>,
                    <>
                     Led multiple projects from conception to deployment, coordinating with cross-functional teams to deliver high-quality solutions on 
                     time.
                    </>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Air University',
                description: <>Bachelor in Cyber Security</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online for AI, Frontend and Backend Development, and Web3 Development, and DevOps.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js,',
            },
            {
                title: 'Python,',
            },
            {
                title: 'Django,',
            },
            {
                title: 'Node.js,',
            },
            {
                title: 'TypeScript,',
            },
            {
                title: 'Git,',
            },
            {
                title: 'Docker,',
            },
            {
                title: 'Kubernetes,',
            },
            {
                title: 'AWS,',
            },
            {
                title: 'MySQL/NOSQL,',
            },
            {
                title: 'PostgreSQL',
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: '',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, blog, work };