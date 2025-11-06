import projectEvenTaskImg from '../../assets/projects/project-1.webp'

export const en = {
  header: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    title: 'Hi, my name is Agustín',
    subtitleTypewriter: {
      opt1: 'Frontend Developer',
      opt2: 'React Enthusiast',
      opt3: 'UI/UX Lover',
    },
    contact: 'Contact me',
    description:
      'Focused on building clean, accessible, and visually appealing interfaces.',
    cta: 'See projects',
  },
  about: {
    title: 'About Me',
    presentation:
      'I am a Frontend Developer with over three years of experience in web development, specializing in React, TypeScript, HTML, and CSS. I am passionate about design and creating attractive, functional, and accessible user interfaces, applying principles of UX/UI Design.',
    skills: 'Skills',
    knowledgeTitle: 'Knowledge & Background',
    knowledgeExperience: 'Experience',
    knowledgeEducation: 'Education',
    experience: [
      {
        title: 'Fullstack Developer',
        company: 'Personal Project',
        period: 'December 2024 - Present',
        description:
          'Development (in progress) of an application focused on task and calendar event management, with real-time notifications and user collaboration.',
      },
      {
        title: 'Semi-senior Fullstack Developer (Frontend-oriented)',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'December 2022 - December 2024',
        description:
          'I carried out tasks for implementing solutions, creating new features, and refactoring legacy code, working collaboratively with users and development teams. Advising team members and conducting daily code reviews.',
      },
      {
        title: 'Junior Fullstack Developer',
        company: 'ADEN Business School',
        period: 'November 2021 - November 2022',
        description:
          'I was part of an interdisciplinary team where I focused on improving and creating implementations to optimize business processes.',
      },
    ],
    education: [
      {
        title: 'React 2025',
        institution: 'Udemy',
        period: '2025',
        description: 'Web development MERN Stack.',
      },
      {
        title: 'Fullstack Web Development Course',
        institution: 'Digital House - Instituto Nacional de Educación Tecnológica (INET)',
        period: '2020 (6 months)',
        description: 'Development of web applications focused on frontend.',
      },
      {
        title: 'University Technician in Programming',
        institution: 'Universidad Tecnológica Nacional (UTN FRM)',
        period: '2018 - 2021',
        description:
          'Software Developer with soft skills, logical knowledge, application, and resolution of real problems demanded by the market through the use of backend and frontend-oriented tools.',
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
        description: 'Full-stack application for managing tasks and calendar events.',
        image: projectEvenTaskImg,
        tags: ['React', 'TypeScript', 'Node.js'],
        demoUrl: 'https://schedule-task-manager.vercel.app/',
        repoBackendUrl: 'https://github.com/agusmoya/backend-mern-todo-app',
        repoFrontendUrl: 'https://github.com/agusmoya/task-manager',
      },
      {
        id: 'project-2',
        title: 'High Performance Sports Portfolio',
        description:
          "A professional portfolio showcasing the user's work, experience, and projects.",
        image: '/task-manager.png',
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
  },
  footer: {
    year: '2025',
    contact: 'You can also contact me through:',
    creator: 'Created by Agustin Moya.',
  },
}
