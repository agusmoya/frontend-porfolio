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
      opt1: 'Frontend Engineer',
      opt2: 'React, TypeScript & UX/UI',
      opt3: 'MERN Stack Architecture',
    },
    contact: 'Contact me',
    description:
      'Building scalable web applications with a strong focus on User Experience, Accessibility, and robust code architecture using the MERN stack.',
    about: 'About me',
    viewCV: 'View CV',
    cvUrl: '/CV-Agustin-Moya-EN.pdf',
  },
  about: {
    title: 'About Me',
    presentation: {
      p1: 'I am a product-minded Frontend Engineer with over four years of experience. While my primary focus is mastering the React ecosystem and TypeScript, I possess the Fullstack expertise (MERN) needed to build complete, scalable solutions.',
      p2: 'I integrate design and development, creating functional, high-performance applications that follow modern architecture best practices.',
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
          "Architected and developed 'EvenTask', a SaaS platform for collaborative task management. Implemented a custom UI system based on Material Design 3 and ensured real-time data synchronization.",
      },
      {
        title: 'Fullstack Web Developer',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'September 2022 to December 2024',
        description:
          'Developed scalable frontend solutions and refactored legacy code in an Agile environment. Focused on code quality, performance optimization, and mentoring peers through code reviews.',
      },
      {
        title: 'Fullstack Web Developer',
        company: 'ADEN Business School',
        period: 'November 2021 to September 2022',
        description:
          'Collaborated with cross-functional teams to translate complex business requirements into custom web solutions that optimized internal processes.',
      },
    ],
    education: [
      {
        title: 'React & MERN',
        institution: 'Udemy',
        period: '2022 - Present',
        description:
          'Continuous learning resource used for reference, deepening knowledge in React, Node.js, Redux Toolkit, and modern architecture patterns.',
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
        title: 'EvenTask - SaaS Platform',
        description:
          'A productivity SaaS featuring a custom Material Design 3 UI, Redux Toolkit (RTK Query) for efficient state management, and a robust Node.js backend with JWT authentication and WebSockets.',
        image: projectEvenTaskImg,
        tags: [
          'React',
          'TypeScript',
          'Redux Toolkit',
          'Material Design 3',
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
          'A fully responsive portfolio developed with semantic HTML, CSS, and Vanilla JavaScript. Optimized for Core Web Vitals to achieve maximum performance scores.',
        image: projectPFDeportivo,
        tags: ['HTML', 'CSS', 'JavaScript', 'Design'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description: "Looking for a Product-Minded Frontend Engineer? Let's talk.",
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
