import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  private fb = inject(FormBuilder);
  
  public languageService = inject(LanguageService);

  contactForm: FormGroup = this.fb.group({
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  isSending = false;
  successMessage = false;
  errorMessage = false;

  async sendEmail() {
    if (this.contactForm.invalid) return;

    this.isSending = true;

    try {
      // Tus credenciales reales (Ya las dejé puestas para que funcione directo)
      const serviceID = 'service_gny9zls';     
      const templateID = 'template_0pnaapu';   
      const publicKey = 'M8FlQX9ht7gi0HlTE';     

      await emailjs.send(serviceID, templateID, this.contactForm.value, publicKey);

      this.successMessage = true;
      this.contactForm.reset();
      setTimeout(() => this.successMessage = false, 5000); 

    } catch (error) {
      console.error('Error al enviar:', error);
      this.errorMessage = true;
      setTimeout(() => this.errorMessage = false, 5000);
    } finally {
      this.isSending = false;
    }
  }
}