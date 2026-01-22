import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'La-Marquesa',
    description: 'Aplicación web desarrollada con un stack moderno. Soluciona todo el funcionamiento tecnico y administracion de una panaderia real. App desarrollada en equipo',
    image: 'assets/images/Lamarquesa.png',
    tags: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
    githubUrl: 'https://github.com/Wonback/La-Marquesa'
  },
  {
    id: 2,
    title: 'Sistema-de-Puntos',
    description: 'Sistema de gestión de fidelización. Permite administrar usuarios y canjes en tiempo real.',
    image: 'assets/images/sistemaDePuntos.png',
    tags: ['Angular', 'Express', 'Sequelize', 'PostgreSQL'],
    githubUrl: 'https://github.com/jonimende/Sistema-de-Puntos'
  },
  {
    id: 3,
    title: 'Billetera-Virtual',
    description: 'Aplicación web desarrollada con un stack moderno. Soluciona el cambio de diferentes divisas, tanto de peso a dolar y a criptomonedas. App desarrollada en equipo',
    image: 'assets/images/wamoney.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Sequelize'],
    githubUrl: 'https://github.com/Knd0/proyectofinalUTN'
  },
  {
    id: 4,
    title: 'Sistema de Gestión de Entradas',
    description: 'Aplicacion completa de un sistema de software de un negocio de venta de entradas. Implementación de patrones de diseño MVC. App desarrollada en equipo',
    image: 'assets/images/laravel.png',
    tags: ['Laravel', 'MySQL', 'Angular'],
    githubUrl: 'https://github.com/Wonback/Programacion-IV-Laravel'
  },
  {
    id: 4,
    title: 'Sistema de Gestión de Turnos para una Barbería',
    description: 'Aplicacion completa de un sistema de software para controlar turnos y cortes para una barberia, con integracion de wathsapp.',
    image: 'assets/images/barber.png',
    tags: ['React', 'Express', 'Typescript', 'Sequelize', 'PostgreSQL'],
    githubUrl: 'https://github.com/jonimende/GestionDeTurnos'
  },
];