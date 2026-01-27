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
      opt1: 'Web Developer',
      opt2: 'React, TypeScript & Node.js',
      opt3: 'UX/UI Oriented Developer',
    },
    contact: 'Contact me',
    description:
      'Specialized in building clean, accessible, and high-performance applications using the MERN stack.',
    about: 'About me',
    viewCV: 'View CV',
    cvUrl: '/CV-Agustin-Moya-EN.pdf',
  },
  about: {
    title: 'About Me',
    presentation: {
      p1: 'I am a Web Developer with over four years of experience, specializing in building scalable web applications using React, Node.js, and TypeScript.',
      p2: 'I translate ideas into code, creating functional, accessible, and high-performance solutions that follow modern architecture best practices.',
    },
    technologies: 'Technologies',
    knowledgeTitle: 'Knowledge & Background',
    knowledgeExperience: 'Experience',
    knowledgeEducation: 'Education',
    experience: [
      {
        title: 'Fullstack Web Developer',
        company: 'Independent Development',
        period: 'December 2024 to Present',
        description:
          "Developed 'EvenTask', a collaborative task, event and calendar manager featuring real-time notifications (WebSockets) and instant updates for seamless user interaction.",
      },
      {
        title: 'Fullstack Web Developer',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'September 2022 to December 2024',
        description:
          'Developed scalable solutions and refactored legacy code in a collaborative agile environment. Actively promoted code quality through daily code reviews and knowledge sharing with peers.',
      },
      {
        title: 'Fullstack Web Developer',
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
          'Continuous learning resource used for reference, deepening knowledge in React, Node.js, and modern libraries.',
      },
      {
        title: 'University Technician in Programming',
        institution: 'Universidad Tecnológica Nacional (UTN FRM)',
        period: '2018 - 2021',
        description:
          'Strong foundation in algorithms, data structures, and software engineering principles. Comprehensive training in logic resolution and application architecture.',
      },
      {
        title: 'Frontend Web Specialization',
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
          'A productivity app featuring JWT authentication, real-time notifications via WebSockets, and a custom UI system built from scratch using React, Node.js, and MongoDB.',
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
          'A fully responsive portfolio developed with HTML, CSS, and Vanilla JavaScript, optimized to maximize performance metrics (Core Web Vitals) and semantic HTML structure.',
        image: projectPFDeportivo,
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description: "Looking for a Web Developer focused on quality and UX? Let's talk.",
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
