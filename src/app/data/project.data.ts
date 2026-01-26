import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'La-Marquesa',
    description: {
        es: 'Aplicación web desarrollada con un stack moderno. Soluciona todo el funcionamiento técnico y administración de una panadería real. App desarrollada en equipo.',
        en: 'Web application developed with a modern stack. It solves all technical operations and administration for a real bakery. App developed as a team.'
    },
    image: 'assets/images/Lamarquesa.png',
    tags: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
    githubUrl: 'https://github.com/Wonback/La-Marquesa'
  },
  {
    id: 2,
    title: 'Sistema-de-Puntos',
    description: {
        es: 'Sistema de gestión de fidelización. Permite administrar usuarios y canjes en tiempo real.',
        en: 'Loyalty management system. Allows real-time administration of users and point redemptions.'
    },
    image: 'assets/images/sistemaDePuntos.png',
    tags: ['Angular', 'Express', 'Sequelize', 'PostgreSQL'],
    githubUrl: 'https://github.com/jonimende/Sistema-de-Puntos'
  },
  {
    id: 3,
    title: 'Billetera-Virtual',
    description: {
        es: 'Aplicación web desarrollada con un stack moderno. Soluciona el cambio de diferentes divisas, tanto de peso a dólar y a criptomonedas. App desarrollada en equipo.',
        en: 'Web application developed with a modern stack. Handles currency exchange between local currency, dollars, and cryptocurrencies. App developed as a team.'
    },
    image: 'assets/images/wamoney.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Sequelize'],
    githubUrl: 'https://github.com/Knd0/proyectofinalUTN'
  },
  {
    id: 4,
    title: 'Sistema de Gestión de Entradas',
    description: {
        es: 'Aplicación completa de un sistema de software de un negocio de venta de entradas. Implementación de patrones de diseño MVC. App desarrollada en equipo.',
        en: 'Complete software system for a ticket sales business. Implementation of MVC design patterns. App developed as a team.'
    },
    image: 'assets/images/laravel.png',
    tags: ['Laravel', 'MySQL', 'Angular'],
    githubUrl: 'https://github.com/Wonback/Programacion-IV-Laravel'
  },
  {
    id: 5, // OJO: Tenías el ID 4 repetido, te lo corregí a 5
    title: 'Sistema de Gestión de Turnos',
    description: {
        es: 'Aplicación completa de un sistema de software para controlar turnos y cortes para una barbería, con integración de WhatsApp.',
        en: 'Complete software system to control appointments and haircuts for a barbershop, featuring WhatsApp integration.'
    },
    image: 'assets/images/barber.png',
    tags: ['React', 'Express', 'Typescript', 'Sequelize', 'PostgreSQL'],
    githubUrl: 'https://github.com/jonimende/GestionDeTurnos'
  },
];