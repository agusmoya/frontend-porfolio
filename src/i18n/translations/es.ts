import projectEvenTaskImg from '../../assets/projects/eventask-preview.webp'
import projectPFDeportivo from '../../assets/projects/dt-cazorla-mockup.webp'

export const es = {
  user: {
    name: 'Agustin',
  },
  header: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    title: 'Hola, mi nombre es',
    subtitleTypewriter: {
      opt1: 'Ingeniero Frontend',
      opt2: 'React, TypeScript y UX/UI',
      opt3: 'Arquitectura Stack MERN',
    },
    contact: 'Contáctame',
    description:
      'Desarrollo aplicaciones web escalables con un fuerte enfoque en la Experiencia de Usuario, Accesibilidad y una arquitectura de código robusta utilizando el stack MERN.',
    about: 'Sobre mí',
    viewCV: 'Ver CV',
    cvUrl: '/CV-Agustin-Moya-ES.pdf',
  },
  about: {
    title: 'Sobre Mí',
    presentation: {
      p1: 'Soy un Ingeniero Frontend con visión de producto y más de cuatro años de experiencia. Aunque mi foco principal es dominar el ecosistema React y TypeScript, cuento con la experiencia Fullstack (MERN) necesaria para construir soluciones completas y escalables.',
      p2: 'Integro diseño y desarrollo, creando aplicaciones funcionales y de alto rendimiento que siguen las mejores prácticas de arquitectura moderna.',
    },
    technologies: 'Tecnologías',
    knowledgeTitle: 'Conocimientos y Antecedentes',
    knowledgeExperience: 'Experiencia',
    knowledgeEducation: 'Educación',
    experience: [
      {
        title: 'Desarrollador Web Fullstack',
        company: 'Desarrollo Independiente',
        period: 'Diciembre 2024 al Presente',
        description:
          "Diseñé la arquitectura y desarrollé 'EvenTask', una plataforma SaaS para la gestión colaborativa de tareas. Implementé un sistema de UI personalizado basado en Material Design 3 y aseguré la sincronización de datos en tiempo real.",
      },
      {
        title: 'Desarrollador Web Fullstack',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'Septiembre 2022 a Diciembre 2024',
        description:
          'Desarrollé soluciones frontend escalables y refactoricé código heredado en un entorno ágil. Me enfoqué en la calidad del código, optimización del rendimiento y mentoría a pares a través de code reviews.',
      },
      {
        title: 'Desarrollador Web Fullstack',
        company: 'ADEN Business School',
        period: 'Noviembre 2021 a Septiembre 2022',
        description:
          'Colaboré con equipos interdisciplinarios para traducir requerimientos de negocio complejos en soluciones web a medida que optimizaron los procesos internos.',
      },
    ],
    education: [
      {
        title: 'React y MERN',
        institution: 'Udemy',
        period: '2022 - Presente',
        description:
          'Recurso de aprendizaje continuo utilizado como referencia para profundizar conocimientos en React, Node.js, Redux Toolkit y patrones de arquitectura moderna.',
      },
      {
        title: 'Tecnicatura Universitaria en Programación',
        institution: 'Universidad Tecnológica Nacional (UTN FRM)',
        period: '2018 - 2021',
        description:
          'Sólida base en algoritmos, estructuras de datos y principios de ingeniería de software. Formación integral en resolución lógica y arquitectura de aplicaciones.',
      },
      {
        title: 'Especialización Web Frontend',
        institution: 'Potrero Digital',
        period: 'Septiembre 2021 - Diciembre 2021',
        description:
          'Formación intensiva enfocada en maquetación web, diseño responsivo y lógica con JavaScript.',
      },
      {
        title: 'Programación Java',
        institution: 'Fundación Educativa Santísima Trinidad',
        period: '2020 - 2021',
        description: 'Programación Orientada a Objetos (POO) y fundamentos de backend.',
      },
      {
        title: 'Desarrollo Web Fullstack',
        institution: 'Digital House (INET)',
        period: '2019 - 2020',
        description:
          'Bootcamp de desarrollo web con fuerte orientación a la maquetación, diseño de interfaces y adaptabilidad.',
      },
    ],
  },
  projects: {
    title: 'Mis Proyectos',
    viewDemo: 'Ver Demo',
    viewCodeFrontend: 'Repositorio Frontend',
    viewCodeBackend: 'Repositorio Backend',
    items: [
      {
        id: 'project-1',
        title: 'EvenTask - Plataforma SaaS',
        description:
          'Un SaaS de productividad con UI personalizada (Material Design 3), gestión de estado eficiente con Redux Toolkit (RTK Query) y un backend robusto en Node.js con autenticación JWT y WebSockets.',
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
        title: 'Portfolio de Alto Rendimiento',
        description:
          'Un portfolio totalmente responsivo desarrollado con HTML semántico, CSS y JavaScript puro. Optimizado para Core Web Vitals para lograr puntajes máximos de rendimiento.',
        image: projectPFDeportivo,
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Ponte en Contacto',
    description: '¿Buscas un Ingeniero Frontend con visión de producto? Hablemos.',
    name: 'Tu nombre',
    email: 'Tu email',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: 'Mensaje enviado con éxito. Te responderé a la brevedad.',
    error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    emailAddress: 'agustin.moya.dev@gmail.com',
    contactOptionEmail: 'Alternativamente, puedes copiar mi dirección de correo:',
  },
  footer: {
    year: '2026',
    contact: 'Conecta conmigo:',
    creator: 'Diseñado y desarrollado por Agustin Moya.',
  },
}
