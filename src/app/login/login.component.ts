import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../shared/global-constants';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { LoginService } from './login.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  public isAuthenticationFail!: boolean;
  hide = true;
  loginform: any = FormGroup;
  public email : any = new FormControl('')
  public password: any = new FormControl('')
  public uname:any;
  public upass:any;

  constructor(
    private r:Router,
    private x: AuthserviceService,
    private formBuilder: FormBuilder, private service:LoginService, private coreService: CoreService
  ){
    this.isAuthenticationFail=false;
  }
  ngOnInit(){
    this.loginform = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailegex)]],
      password: [null, [Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginform.valid) {
      this.service.UserLogin(this.loginform.value).subscribe((data) => {
        console.log(data)
        if (data === "Login Successful") {
          this.coreService.openSnackBar("Login Successful");
          sessionStorage.setItem("isLoginUser", "true");
          setTimeout(() => {
            this.r.navigate(["/dashboard"]);
          }, 2000);

        } else if (data === "email not found") {
          this.loginform.get('email')?.setErrors({ 'emailNotFound': true });

          this.coreService.openSnackBar('email not found');

        } else {
          this.loginform.get('password')?.setErrors({ 'incorrectPassword': true });

          this.coreService.openSnackBar('Incorrect Password');
        }
      })

    } else {
      this.validateAllFormFields(this.loginform);
      this.coreService.openSnackBar('Your form is invalid');

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
