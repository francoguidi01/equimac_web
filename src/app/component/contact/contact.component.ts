import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
      this.contactForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
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

      alert('ENVIADO!!!');
      this.contactForm.reset();
    } catch (error) {
      console.error('Error sending email:', error);
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