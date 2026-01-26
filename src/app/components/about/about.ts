import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LanguageService } from '../../services/language'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  public languageService = inject(LanguageService);

  techStack = [
    { name: 'Python', url: 'https://www.python.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'React', url: 'https://react.dev/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', url: 'https://tailwindcss.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Angular', url: 'https://angular.io/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Sequelize', url: 'https://sequelize.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
    { name: 'Git', url: 'https://git-scm.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];
}