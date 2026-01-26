import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para que funcione *ngIf o [class]
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public languageService = inject(LanguageService);

}