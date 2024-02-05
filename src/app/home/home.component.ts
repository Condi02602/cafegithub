import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private dialog:MatDialog, 
    private router:Router) { }


  signup(){
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe({
      next: (val)=> {
        if(val){
          this.signup();
        }
      }
    })
}

login(){
  const dialogRef = this.dialog.open(LoginComponent);
  dialogRef.afterClosed().subscribe({
    next: (val)=> {
      if(val){
        this.signup();
      }
    }
  })
}
}
