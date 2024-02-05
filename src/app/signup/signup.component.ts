import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../shared/global-constants';
import { SignupService } from './signup.service';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  password = true;
  confirmPassword = true;
  signupForm: any= FormGroup;
  hide = true;

  constructor(private formBuilder:FormBuilder, private service:SignupService, private coreService: CoreService, private r:Router){}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name:["", [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      lastname:["", [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email:["", [Validators.required, Validators.pattern(GlobalConstants.emailegex)]],
      contact:["", [Validators.required, Validators.pattern(GlobalConstants.contactRegex)]],
      password:["", [Validators.required]],
      confirmPassword:["", [Validators.required]]
    })
  }
  validateSubmit() {
    if (this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value) {
      return true;
    }
    else {
      return false;
    }
  }
  RegistrationUser(){
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)
      this.service.UserRegistration(this.signupForm.value).subscribe((data) => {
        console.log(this.signupForm.value);
        if (data == "Registration Successfully Done.") {
          this.coreService.openSnackBar('Registration Successfull','done');
          setTimeout(() => {
            this.r.navigate(["/login"]);
          }, 3000);
        } else if (data == "Email already exists. Registration failed.") {
          this.signupForm.get('UserEmail')?.setErrors({ 'emailNotFound': true });

          this.coreService.openSnackBar("email already exists");

          this.signupForm.get('UserEmail')?.reset();
        } else if (data == "Invalid email format. Registration failed.") {
          this.signupForm.get('UserEmail')?.setErrors({ 'emailNotFound': true });

          this.coreService.openSnackBar("Invalid email format. Registration failed.");
          // alert(data);
        } else if (data == "Invalid password format. Password should be at least 8 characters and contain at least one letter and one digit. Registration failed.") {
          this.signupForm.get('UserPassword')?.setErrors({ 'incorrectPassword': true });

          this.coreService.openSnackBar("Invalid password format. Password should be at least 8 characters and contain at least one letter and one digit.");
          // alert(data);
        }
        else {
          alert(data);
        }

      });
    } else {
      this.validateAllFormFields(this.signupForm);
      this.coreService.openSnackBar("Your form is invalid");
      // alert("Your form is invalid");
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }
}
