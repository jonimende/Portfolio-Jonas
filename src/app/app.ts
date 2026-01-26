import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  // ¡No olvides agregarlos aquí!
  imports: [RouterOutlet, Navbar, HeroComponent, ProjectsComponent, Contact, Footer, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-jonas';
}