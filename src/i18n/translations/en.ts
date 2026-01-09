import projectEvenTaskImg from '../../assets/projects/preview-eventask.webp'
import projectPFDeportivo from '../../assets/projects/pf-pc-preview.webp'

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
      opt1: 'Frontend developer',
      opt2: 'React enthusiast',
      opt3: 'UI designer',
    },
    contact: 'Contact me',
    description:
      'Focused on building clean, accessible, and visually appealing interfaces.',
    about: 'About me',
    viewCV: 'View CV',
  },
  about: {
    title: 'About Me',
    presentation: {
      p1: 'I am a Frontend Developer with over four years of experience in web development, specializing in React, TypeScript, HTML, and CSS.',
      p2: 'I enjoy designing and creating attractive, functional, and accessible user interfaces.',
    },
    technologies: 'Technologies',
    knowledgeTitle: 'Knowledge & Background',
    knowledgeExperience: 'Experience',
    knowledgeEducation: 'Education',
    experience: [
      {
        title: 'Fullstack Developer (Frontend-oriented)',
        company: 'Personal Project',
        period: 'December 2024 to present',
        description:
          'Development of an application focused on task and calendar event management, with real-time notifications and user collaboration.',
      },
      {
        title: 'Fullstack Developer (Frontend-oriented)',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'September 2022 to december 2024',
        description:
          'I carried out tasks for implementing solutions, creating new features, and refactoring legacy code, working collaboratively with users and development teams. Advising team members and conducting daily code reviews.',
      },
      {
        title: 'Fullstack Developer',
        company: 'ADEN Business School',
        period: 'November 2021 to september 2022',
        description:
          'I was part of an interdisciplinary team where I focused on improving and creating implementations to optimize business processes.',
      },
    ],
    education: [
      {
        title: 'React 2025',
        institution: 'Udemy',
        period: 'March 2022 to 2025 (Progressive updates)',
        description: 'Web development MERN Stack.',
      },
      {
        title: 'University Technician in Programming',
        institution: 'Universidad Tecnológica Nacional (UTN FRM)',
        period: 'March 2018 to december 2021',
        description:
          'Software Developer with soft skills, logical knowledge, application, and resolution of real problems demanded by the market through the use of backend and frontend-oriented tools.',
      },
      {
        title: 'Frontend Programming Course',
        institution: 'Potrero Digital',
        period: 'September 2021 to December 2021',
        description: 'Web application development.',
      },
      {
        title: 'Java Programming Training',
        institution: 'Fundación Educativa Santísima Trinidad',
        period: 'October 2020 to April 2021 (500 hours)',
        description: 'Web application development.',
      },
      {
        title: 'Fullstack Web Development Course',
        institution: 'Digital House - Instituto Nacional de Educación Tecnológica (INET)',
        period: 'October 2019 to march 2020',
        description: 'Development of web application focused on frontend.',
      },
    ],
  },
  projects: {
    title: 'My Projects',
    viewDemo: 'Go to website',
    viewCodeFrontend: 'View Frontend Repository',
    viewCodeBackend: 'View Backend Repository',
    items: [
      {
        id: 'project-1',
        title: 'EvenTask App',
        description:
          'Full-stack application for managing tasks, calendar events, real-time notifications, and user collaboration.',
        image: projectEvenTaskImg,
        tags: ['React', 'TypeScript', 'Node.js'],
        demoUrl: 'https://taskevent.netlify.app/',
        repoBackendUrl: 'https://github.com/AgustinMoyaDev/eventask-api',
        repoFrontendUrl: 'https://github.com/AgustinMoyaDev/eventask-web',
      },
      {
        id: 'project-2',
        title: 'High Performance Sports Portfolio',
        description:
          "A professional portfolio that showcases the user's work, experience, and knowledge.",
        image: projectPFDeportivo,
        tags: ['React', 'TypeScript', 'Node.js'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description: 'If you have any questions or proposals, feel free to contact me.',
    name: 'Your name',
    email: 'Your email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully. I will get back to you shortly.',
    error: 'Failed to send message. Please try again.',
    emailAddress: 'agustin.moya.dev@gmail.com',
    contactOptionEmail:
      'Or you can copy my email and send your message from wherever you prefer:',
  },
  footer: {
    year: '2025',
    contact: 'You can also contact me through:',
    creator: 'Created by Agustin Moya.',
  },
}
