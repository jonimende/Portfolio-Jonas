import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/project.data'; // Importamos tus datos
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Necesario para usar *ngFor
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}