import projectEvenTaskImg from '../../assets/projects/eventask-preview.webp'
import projectPFDeportivo from '../../assets/projects/dt-cazorla-mockup.webp'

export const en = {
  user: {
    name: 'Agustin',
  },
  header: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    title: 'Hi, my name is',
    subtitleTypewriter: {
      opt1: 'Frontend Developer',
      opt2: 'React Specialist',
      opt3: 'UX/UI Oriented Developer',
    },
    contact: 'Contact me',
    description:
      'Specialized in building clean, accessible, and high-performance interfaces using the MERN stack.',
    about: 'About me',
    viewCV: 'View CV',
  },
  about: {
    title: 'About Me',
    presentation: {
      p1: 'I am a Frontend Developer with over four years of experience in web development, specializing in React, TypeScript, and modern UI architectures.',
      p2: 'I translate design into code, creating functional and accessible user interfaces that follow best practices.',
    },
    technologies: 'Technologies',
    knowledgeTitle: 'Knowledge & Background',
    knowledgeExperience: 'Experience',
    knowledgeEducation: 'Education',
    experience: [
      {
        title: 'Frontend Developer',
        company: 'Independent Development',
        period: 'December 2024 to Present',
        description:
          "Developed 'EvenTask', a collaborative task, event and calendar manager featuring real-time notifications and instant updates for seamless user interaction.",
      },
      {
        title: 'Frontend Developer (Fullstack Duties)',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'September 2022 to December 2024',
        description:
          'Developed scalable solutions and refactored legacy code in a collaborative agile environment. Actively promoted code quality through daily code reviews and knowledge sharing with peers.',
      },
      {
        title: 'Fullstack Developer',
        company: 'ADEN Business School',
        period: 'November 2021 to September 2022',
        description:
          'Collaborated with cross-functional teams (Accounting, Certification) to analyze requirements and develop custom solutions that optimized internal business processes.',
      },
    ],
    education: [
      {
        title: 'React & MERN',
        institution: 'Udemy',
        period: '2022 - Present',
        description:
          'Continuous learning resource used for reference, deepening knowledge, and keeping up with framework updates.',
      },
      {
        title: 'University Technician in Programming',
        institution: 'Universidad Tecnológica Nacional (UTN FRM)',
        period: '2018 - 2021',
        description:
          'Strong foundation in algorithms, data structures, and software engineering principles. Comprehensive training in logic resolution and application architecture.',
      },
      {
        title: 'Frontend Specialization',
        institution: 'Potrero Digital',
        period: 'September 2021 - December 2021',
        description:
          'Intensive training focused on Web Layout, Responsive Design, and JavaScript logic.',
      },
      {
        title: 'Java Programming',
        institution: 'Fundación Educativa Santísima Trinidad',
        period: '2020 - 2021',
        description: 'Object-Oriented Programming (OOP) and backend fundamentals.',
      },
      {
        title: 'Fullstack Web Development',
        institution: 'Digital House (INET)',
        period: '2019 - 2020',
        description:
          'Web development bootcamp with a strong focus on UI Layout, Interface Design, and Adaptability.',
      },
    ],
  },
  projects: {
    title: 'My Projects',
    viewDemo: 'Live Demo',
    viewCodeFrontend: 'Frontend Repository',
    viewCodeBackend: 'Backend Repository',
    items: [
      {
        id: 'project-1',
        title: 'EvenTask App',
        description:
          'A productivity app featuring JWT authentication, real-time notifications via WebSockets, and a custom UI system built from scratch using React and CSS Modules.',
        image: projectEvenTaskImg,
        tags: [
          'HTML',
          'CSS',
          'React',
          'TypeScript',
          'Node.js',
          'Express',
          'Socket.io',
          'MongoDB',
        ],
        demoUrl: 'https://demo-eventask.netlify.app/home',
        repoBackendUrl: 'https://github.com/AgustinMoyaDev/eventask-api',
        repoFrontendUrl: 'https://github.com/AgustinMoyaDev/eventask-web',
      },
      {
        id: 'project-2',
        title: 'High Performance Portfolio',
        description:
          'A fully responsive portfolio built with vanilla technologies to maximize performance metrics (Core Web Vitals) and semantic HTML structure.',
        image: projectPFDeportivo,
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description: "Looking for a Frontend Developer aimed at quality and UX? Let's talk.",
    name: 'Your name',
    email: 'Your email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully. I will get back to you shortly.',
    error: 'Failed to send message. Please try again.',
    emailAddress: 'agustin.moya.dev@gmail.com',
    contactOptionEmail: 'Alternatively, you can copy my email address:',
  },
  footer: {
    year: '2026',
    contact: 'Connect with me:',
    creator: 'Designed & Developed by Agustin Moya.',
  },
}
