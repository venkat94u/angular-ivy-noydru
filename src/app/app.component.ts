import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public _myFb: FormBuilder) {}
  /* registrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      state: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
    }),
  });*/
  registrationForm = this._myFb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    address: this._myFb.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    }),
  });
  displayitems() {
    this.registrationForm.setValue({
      username: 'venkat',
      email: 'venkat@gmail.com',
      password: 'venkat',
      address: {
        state: 'telangana',
        city: 'manuguru',
        address: 'h-no-2-1-250/1',
      },
    });
  }
  get username() {
    return this.registrationForm.get('username');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get state() {
    return this.registrationForm.get('address.state');
  }
  get city() {
    return this.registrationForm.get('address.city');
  }
  get address() {
    return this.registrationForm.get('address.address');
  }
}
