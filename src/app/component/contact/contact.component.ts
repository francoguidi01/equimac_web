import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { DarkModeService } from '../../services/dark-mode.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
isDarkMode: boolean=false;
collapseMessage: string = '';
animationState: string = '';

  ngOnInit(): void {
    window.scrollTo(0, 0); 

    this.isDarkMode = this.darkModeService.getDarkMode();

    this.darkModeService.darkMode$.subscribe((isDarkMode: boolean) => {
      this.isDarkMode = isDarkMode;
    });
  }

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private darkModeService: DarkModeService) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      telephone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(9), Validators.maxLength(15)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }


  
  async send() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.collapseMessage = 'Formulario incompleto. Por favor, rellene todos los campos correctamente.';
      setTimeout(() => {
        this.collapseMessage = '';
      }, 6800);
      return;
    }
  
    try {
      emailjs.init('2fZh7gGfm-fiwSFXe');
      let response = await emailjs.send('service_3sw0g1c', 'template_21w2kzg', {
        name: this.contactForm.value.name,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        telephone: this.contactForm.value.telephone,
        message: this.contactForm.value.message
      });
  
      this.collapseMessage = '¡El correo electrónico se envió correctamente!';
      this.contactForm.reset();
      setTimeout(() => {
        this.collapseMessage = '';
      }, 5900); 
    } catch (error) {
      this.collapseMessage = '¡El correo electrónico no se pudo enviar! Por favor, inténtelo de nuevo más tarde.';
      setTimeout(() => {
        this.collapseMessage = '';
      }, 5900); 
    }
  }
}

  /*
  *ngIf="quizForm.invalid"
   s@gmail.com 
   asdhsadh@gmail.com
   action="https://formsubmit.co/kevintolosa2000@gmail.com" method="POST"
   service_3sw0g1c




   async send() {
    emailjs.init('2fZh7gGfm-fiwSFXe')
   let response  = await emailjs.send('service_3sw0g1c', 'template_21w2kzg',{
      name: this.contactForm.value.name,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      telephone: this.contactForm.value.telephone,
      message: this.contactForm.value.message
    });

    alert('ENVIADO!!!')

    this.contactForm.reset;
  }
   */