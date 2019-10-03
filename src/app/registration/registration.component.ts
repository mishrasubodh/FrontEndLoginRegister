import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor( 
      private formBuilder: FormBuilder,
      private router: Router,
    ) {

   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.loading = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
        this.loading = false;
          return;
      }

    
     
  }
 cancle(){
 this.router.navigate(['/login'])
 }
}
