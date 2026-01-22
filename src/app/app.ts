import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  // ¡No olvides agregarlos aquí!
  imports: [RouterOutlet, Navbar, HeroComponent, ProjectsComponent, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-jonas';
}