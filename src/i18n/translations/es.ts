import projectEvenTaskImg from '../../assets/projects/project-1.webp'

export const es = {
  user: {
    name: 'Agustín',
  },
  header: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    title: 'Hola, mi nombre es',
    subtitleTypewriter: {
      opt1: 'Desarrollador Frontend',
      opt2: 'Entusiasta de React',
      opt3: 'Amante de UI/UX',
    },
    description: 'Enfocado en crear interfaces limpias, accesibles y atractivas.',
    contact: 'Contáctame',
    about: 'Acerca de mí',
    viewCV: 'Ver CV',
  },
  about: {
    title: 'Sobre mí',
    presentation: {
      p1: 'Soy Frontend Developer con más de tres años de experiencia en desarrollo web, especializado en React, TypeScript, HTML y CSS.',
      p2: 'Me gusta diseñar y crear interfaces de usuario atractivas, funcionales y accesibles, aplicando los principios de diseño UX/UI.',
    },
    technologies: 'Habilidades',
    knowledgeTitle: 'Conocimientos y Formación',
    knowledgeExperience: 'Experiencia',
    knowledgeEducation: 'Educación',
    experience: [
      {
        title: 'Desarrollador Fullstack',
        company: 'Proyecto personal',
        period: 'Diciembre 2024 - Presente',
        description:
          'Desarrollo (en proceso) de aplicación orientada a la gestión de tareas y eventos de calendario, con notificaciones en tiempo real y colaboración entre usuarios.',
      },
      {
        title: 'Desarrollador Fullstack (orientado a frontend)',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'Diciembre 2022 a diciembre 2024',
        description:
          'Cumplí tareas de implementación de soluciones, creación de nuevas funcionalidades y refactorización de código heredado, trabajando de forma colaborativa con usuarios y equipos de desarrollo. Asesoramiento a los miembros del equipo y revisiones diarias de código.',
      },
      {
        title: 'Desarrollador Fullstack',
        company: 'ADEN Business School',
        period: 'Noviembre 2021 a noviembre 2022',
        description:
          'Formé parte de un equipo interdisciplinario donde me dediqué a mejorar y crear implementaciones para optimizar los procesos de negocio.',
      },
    ],
    education: [
      {
        title: 'React 2025',
        institution: 'Udemy',
        period: '2025',
        description: 'Desarrollo web MERN Stack.',
      },
      {
        title: 'Técnico Universitario en Programación',
        institution: 'Universidad Tecnológica Nacional (UTN FRM)',
        period: '2018 - 2021',
        description:
          'Desarrollador de Software con habilidades blandas, conocimiento lógico, aplicación y resolución a problemas reales que demanda el mercado mediante el uso de herramientas orientadas al backend y frontend',
      },
      {
        title: 'Curso de Programación Web Fullstack',
        institution: 'Digital House - Instituto Nacional de Educación Tecnológica (INET)',
        period: '2020 (6 meses)',
        description: 'Desarrollo de aplicaciones web orientada a frontend.',
      },
    ],
  },
  projects: {
    title: 'Mis Proyectos',
    viewDemo: 'Ir al sitio web',
    viewCodeFrontend: 'Ver Repositorio Frontend',
    viewCodeBackend: 'Ver Repositorio Backend',
    items: [
      {
        id: 'project-1',
        title: 'EvenTask App',
        description:
          'Aplicación full-stack para la gestión de tareas, eventos de calendario, notificaciones en tiempo real y colaboración de usuarios.',
        image: projectEvenTaskImg,
        tags: ['React', 'TypeScript', 'Node.js'],
        demoUrl: 'https://schedule-task-manager.vercel.app/',
        repoBackendUrl: 'https://github.com/agusmoya/backend-mern-todo-app',
        repoFrontendUrl: 'https://github.com/agusmoya/task-manager',
      },
      {
        id: 'project-2',
        title: 'Porfolio alto rendimiento deportivo',
        description:
          'Portafolio profesional que muestra el trabajo, la experiencia y el conocimiento del usuario.',
        image: '',
        tags: ['React', 'TypeScript', 'Node.js'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Contáctame',
    description: 'Si tienes alguna pregunta o propuesta, no dudes en contactarme.',
    name: 'Tu nombre',
    email: 'Tu correo electrónico',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: 'Mensaje enviado correctamente. Te responderé en breve.',
    error: 'Error al enviar el mensaje. Inténtalo de nuevo.',
    emailAddress: 'agustin.moya.dev@gmail.com',
    contactOptionEmail:
      'O puedes copiar mi correo y enviar tu mensaje desde donde prefieras:',
  },
  footer: {
    year: '2025',
    contact: 'También puedes contactarme a través de:',
    creator: 'Creado por Agustin Moya.',
  },
}
