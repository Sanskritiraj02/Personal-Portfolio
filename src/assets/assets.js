import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaPython,FaBrain } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      description: 'Build efficient solutions using strong analytical and DSA skills.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Create clean, responsive, and user-friendly interfaces.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Write simple, maintainable, and efficient code.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Engineering highly responsive, performant, and accessible user interfaces utilizing modern component-based architectures.',
    tags: ['React', 'Tailwind CSS','Vite','Vue.js']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Architecting scalable, secure server-side applications and high-performance RESTful APIs to drive complex business logic.',
    tags: ['Node.js', 'Express', 'Django']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing normalized schemas and optimizing queries for relational and NoSQL databases to ensure high availability and data integrity.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Machine Learning',
    icon: FaMobileAlt,
    description: 'Building predictive models and intelligent systems to extract insights from data',
    tags: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pytorch']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Leveraging industry-standard tools for version control, collaborative UI/UX design, and efficient development lifecycles.',
    tags: ['Git & GitHub', 'Figma', 'VSCode', 'Postman']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Movie Recommendation System",
    description: "An intelligent web application that leverages collaborative filtering and content-based machine learning algorithms to deliver highly personalized movie suggestions.",
    image: projectImg3,
    tech: ["React", "Node.js", "Python", "Scikit-Learn"],
    icons: [FaReact, FaNodeJs, FaPython, FaBrain],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Web Developer Intern",
    company: "Buildsy Retail Technologies LLP",
    duration: "July 2026 - Present",
    description:"Working on UI development and performance optimization ",
    color: "purple"
  },
  {
    role: "Machine Learning with AI",
    company: "Internshala Training",
    duration: "June 2025 - Aug 2025",
    description:
      "Developed predictive models utilizing supervised and unsupervised machine learning algorithms. Final Assessment Score: 100%",
    color: "purple"
  },
  {
    role: "Data Science with AI",
    company: "Internshala Training",
    duration: "June 2024 - Aug 2024",
    description:
      "Completed comprehensive data analysis, statistical modeling, and foundational AI model building using Python. Final Assessment Score: 88%",
    color: "pink"
  }
];
