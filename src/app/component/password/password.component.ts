import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.passwordForm = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  async send() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      setTimeout(() => {}, 6800);
      return;
    }
    try {
      const passwordValue = this.passwordForm.get('password')?.value;
      if (passwordValue === '2024equimaqweb') {
        this.router.navigate(['/home']);
        return;
      }
      this.passwordForm.reset();
      setTimeout(() => {
        console.log('bien!!');
      }, 5900);
    } catch (error) {
      console.log('error!!');
    }
  }
}
