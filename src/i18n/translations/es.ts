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
      opt1: 'Desarrollador Web',
      opt2: 'React, TypeScript y Node.js',
      opt3: 'Desarrollador Orientado a UX/UI',
    },
    contact: 'Contáctame',
    description:
      'Especializado en construir aplicaciones limpias, accesibles y de alto rendimiento utilizando el stack MERN.',
    about: 'Sobre mí',
    viewCV: 'Ver CV',
    cvUrl: '/CV-Agustin-Moya-ES.pdf',
  },
  about: {
    title: 'Sobre Mí',
    presentation: {
      p1: 'Soy Desarrollador Web con más de cuatro años de experiencia, especializado en construir aplicaciones web escalables utilizando React, Node.js y TypeScript.',
      p2: 'Traduzco ideas en código, creando soluciones funcionales, accesibles y de alto rendimiento que siguen las mejores prácticas de arquitectura moderna.',
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
          "Desarrollo de 'EvenTask', un gestor colaborativo de tareas, eventos y calendario que integra notificaciones en tiempo real (WebSockets) y actualizaciones instantáneas para una interacción de usuario fluida.",
      },
      {
        title: 'Desarrollador Web Fullstack',
        company: 'SanCor Salud - Grupo de Medicina Privada',
        period: 'Septiembre 2022 a Diciembre 2024',
        description:
          'Desarrollo de soluciones escalables y refactorización de código heredado en un entorno ágil y colaborativo. Promoción activa de la calidad del código a través de code reviews diarios e intercambio de conocimientos con el equipo.',
      },
      {
        title: 'Desarrollador Web Fullstack',
        company: 'ADEN Business School',
        period: 'Noviembre 2021 a Septiembre 2022',
        description:
          'Colaboración con equipos interdisciplinarios (Contabilidad, Certificación) para analizar requerimientos y desarrollar soluciones a medida que optimizaron los procesos internos del negocio.',
      },
    ],
    education: [
      {
        title: 'React y MERN',
        institution: 'Udemy',
        period: '2022 - Presente',
        description:
          'Recurso de aprendizaje continuo utilizado como referencia para profundizar conocimientos en React, Node.js y librerías modernas.',
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
        title: 'App EvenTask',
        description:
          'Una aplicación de productividad que cuenta con autenticación JWT, notificaciones en tiempo real vía WebSockets y un sistema de UI personalizado construido desde cero con React, Node.js y MongoDB.',
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
        title: 'Portfolio de Alto Rendimiento',
        description:
          'Un portfolio totalmente responsivo desarrollado con HTML, CSS y JavaScript puro, optimizado para maximizar las métricas de rendimiento (Core Web Vitals) y la semántica web.',
        image: projectPFDeportivo,
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://portfolio-pedro-cazorla.netlify.app/',
        repoFrontendUrl: 'https://github.com/agusmoya/portfolio-pedro-cazorla',
      },
    ],
  },
  contact: {
    title: 'Ponte en Contacto',
    description: '¿Buscas un Desarrollador Web enfocado en la calidad y la UX? Hablemos.',
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
