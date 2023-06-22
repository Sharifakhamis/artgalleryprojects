import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.maxLength(6) ])
    });
  }

  onLogin() {
    // this.router.navigateByUrl('../user-home');
    // const values = this.loginForm.value;
    // console.log(this.loginForm.value);
  }

}
