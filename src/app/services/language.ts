import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Signal para detectar el cambio de idioma ('es' o 'en')
  currentLang = signal<'es' | 'en'>('es');

  // Aquí guardamos todos los textos
  translations = {
    es: {
      nav: { home: 'Inicio', projects: 'Proyectos', contact: 'Contacto' },
      hero: {
        greeting: 'Hola, soy',
        role: 'Desarrollador Full Stack',
        description: 'Especializado en crear experiencias web modernas y escalables.',
        student: 'Actualmente finalizando la Tecnicatura en Programación en la UTNFrCon.',
        btnProject: 'Ver Proyectos',
        btnContact: 'Contactarme'
      },
      about: {
        title: 'Sobre Mí',
        p1: 'Hola, soy Jonas, estudiante de la Tecnicatura en Programación en la UTNFrCon.',
        p2: 'Soy un desarrollador Full Stack dedicado y eficiente, con experiencia construyendo aplicaciones web completas, desde la base de datos hasta la interfaz de usuario. Tengo un fuerte interés en la arquitectura de software y disfruto trabajando en proyectos desafiantes que me empujen a mejorar. Me considero de aprendizaje rápido y tengo buen ojo para los detalles, lo que me permite entregar código limpio y escalable. También soy un buen comunicador y disfruto del trabajo en equipo para resolver problemas complejos.',
        techTitle: 'Tecnologías y Herramientas'
      },
      projects: {
        title: 'Mis Proyectos',
        subtitle: 'Una selección de mis trabajos y aportes en desarrollo fullstack.',
        btnCode: 'Ver Código'
      },
      contact: {
        title: 'Contacto',
        subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      }
    },
    en: {
      nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
      hero: {
        greeting: 'Hi, I am',
        role: 'Full Stack Developer',
        description: 'Specialized in building modern and scalable web experiences.',
        student: 'Currently finishing the Programming Technician degree at UTNFrCon.',
        btnProject: 'View Projects',
        btnContact: 'Contact Me'
      },
      about: {
        title: 'About Me',
        p1: 'Hi, I am Jonas, a Programming Technician student at UTNFrCon.',
        p2: 'I am a dedicated and efficient Full Stack developer with experience building complete web applications, from the database to the user interface. I have a strong interest in software architecture and enjoy working on challenging projects that push me to improve.',
        p3: 'I consider myself a quick learner with an eye for detail, allowing me to deliver clean and scalable code. I am also a good communicator and enjoy teamwork to solve complex problems.',
        techTitle: 'Technologies & Tools'
      },
      projects: {
        title: 'My Projects',
        subtitle: 'A selection of my work and contributions in fullstack development.',
        btnCode: 'View Code'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Have a project in mind? Let\'s talk!',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      }
    }
  };

  // Método para cambiar el idioma
  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }

  // Método para obtener los textos actuales
  get content() {
    return this.translations[this.currentLang()];
  }
}