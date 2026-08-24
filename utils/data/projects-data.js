export const projectsData = [
    {
        id: 1,
        name: 'Gastroflow',
        description: "GastroFlow una Plataforma multi-tenant de gestión para restaurantes. Backend construido con NestJS, TypeORM y PostgreSQL, con aislamiento multi-tenant a nivel de entidad. Implementé el módulo completo de usuarios (CRUD, control de acceso basado en roles, soft delete, cambio de contraseña), un flujo de recuperación de contraseña con Nodemailer/Gmail SMTP y tokens de expiración limitada, y un chatbot con matching de intenciones por palabras clave en español usando react-chatbot-kit. El backlog cubrió 15 historias de usuario (101 puntos, 4 sprints) incluyendo autenticación, pedidos en tiempo real, reservas, facturación y suscripciones SaaS.",
        website: 'https://front-gastroflow.onrender.com/',
        tools: ['Express', 'NodeJS', 'React', 'Javascript', 'JWT', 'Bcrypt', 'Nodemailer', 'PostgreSQL', 'Sequelize', 'Docker'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Ecommerce Backend',
        description: 'Proyecto ecommerce backend — REST API construida con NestJS, TypeORM, PostgreSQL, JWT, bcrypt, Cloudinary, Docker y Swagger. Implementé filtrado de usuarios basado en roles, un filtro de excepciones HTTP, un interceptor para remover contraseñas de las respuestas, y una interfaz genérica ApiResponse<T> aplicada manualmente en los métodos del servicio.',
        tools: ['NextJS', 'CSS', "NestJS", 'Javascript', "TypeScript", "PostgreSQL", "TypeORM", "JWT", 'Node.js'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },