import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shota",
  lastName: "Suzuki",
  name: `Shota Suzuki`,
  role: "Senior Software Engineer",
  avatar: "/images/avatar.png",
  email: "s.shota13@outlook.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/s-shota13/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full-Stack Software Engineer with 8 years of experience in designing and developing scalable applications, with a specialization in AI/ML integration. Strong expertise in system architecture, high-performance APIs, and building AI-powered applications that drive business intelligence. Proven hands-on experience in optimizing distributed systems, implementing microservices architecture, and leading teams to deliver measurable performance improvements across web and mobile platforms. Adept at building AI-driven data pipelines, improving system scalability, and driving innovation in cross-functional teams.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Clipboard Health",
        timeframe: "Sep 2021 - July 2025",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Developed mobile applications supporting 50k+ active users, with integrated AI/ML models for predictive analytics and operational optimization.
          </>,
          <>
            Designed and implemented cloud-native microservices (.Net Core, Node.JS, Kubernetes), resulting in a 40% reduction in platform downtime.
          </>,
          <>
            Designed and built AI-powered data pipelines, which automated data processing workflows, cutting manual tasks by 25% and improving predictive model accuracy.
          </>,
          <>
            Optimized SQL/NoSQL database systems, boosting query performance by 35% and enabling real-time analytics for data-driven decision-making.
          </>,
          <>
            Mentored junior engineers, fostering a culture of code quality and AI/ML best practices across the team.
          </>,
          <>
            Increased feature delivery speed by 30% through agile methodologies, cross-functional collaboration, and continuous integration practices.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Screenshot_1.png",
            alt: "Clipboard Health",
            width: 16,
            height: 9,
          },
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Screenshot_2.png",
            alt: "Clipboard Health",
            width: 16,
            height: 9,
          },
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Screenshot_3.png",
            alt: "Clipboard Health",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Coldedge Technologies",
        timeframe: "May 2018 - Aug 2021",
        role: "Software Engineer",
        achievements: [
          <>
            Developed full-stack solutions for multiple clients, contributing to the successful launch of 3 major platforms with integrated AI/ML solutions.
          </>,
          <>
            Supported cloud deployments and automated testing processes, which improved workflow efficiency by 15%.
          </>,
          <>
            Contributed to the design and deployment of AI-based recommendation systems that personalized user experiences and increased engagement.
          </>,
          <>
            Participated in Agile sprints, contributing to code reviews, technical documentation, and ensuring high-quality standards.
          </>,
        ],
        images: [
          {
            src: "/images/Screenshot_4.png",
            alt: "Flink",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Screenshot_5.png",
            alt: "GrubMarket",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Yokohama",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Engineering",
        description: (
          <>
            <strong>Front-End:</strong> React, Angular, TypeScript, JavaScript, HTML5, CSS3, Responsive UI
            <br />
            <strong>Back-End:</strong> .NET Core, Node.js, REST, GraphQL, Microservices
            <br />
            <strong>AI/ML:</strong> Python, TensorFlow, PyTorch, Scikit-Learn, Natural Language Processing (NLP),
            Predictive Analytics
            <br />
            <strong>Cloud &amp; DevOps:</strong> AWS, Azure, GCP, Docker, Kubernetes, CI/CD, Automated Testing
            <br />
            <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis
            <br />
            <strong>Tools:</strong> Git, Jira, Terraform, Jenkins
            <br />
            <br />
            <strong>Certificates:</strong>
            <br />
            <a
              href="https://www.testdome.com/certificates/08a398de48b94335bdbbfe9725522098"
              target="_blank"
              rel="noreferrer"
            >
              React – TestDome
            </a>
            <br />
            <a
              href="https://www.testdome.com/certificates/d9f4f602aa364260a9e225e77141684e"
              target="_blank"
              rel="noreferrer"
            >
              Node.js – TestDome
            </a>
            <br />
            <a
              href="https://www.testdome.com/certificates/d034ebe17f9444ff88d289f8ffecdd3e"
              target="_blank"
              rel="noreferrer"
            >
              Python – TestDome
            </a>
            <br />
            <a
              href="https://www.testdome.com/certificates/a23ba825cb1f44dc83f69952b8c51865"
              target="_blank"
              rel="noreferrer"
            >
              C# – TestDome
            </a>
            <br />
            <a
              href="https://www.testdome.com/certificates/9bc8960e9f024e30bcb06dbb0dde79a4"
              target="_blank"
              rel="noreferrer"
            >
              Java – TestDome
            </a>
          </>
        ),
        tags: [
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Screenshot_10.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Screenshot_6.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Screenshot_7.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Screenshot_8.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Screenshot_9.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },      
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
