import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {

  form!: FormGroup;
  loginForm!: FormGroup<{
    firstname: FormControl<null>;
    // lastName: new ['', Validators.required],
    fullname: FormControl<null>; bankbranche: FormControl<null>; amount: FormControl<null>; phonenumber: FormControl<null>; date: FormControl<null>;
  }>;
  // loginForm: FormGroup<{
  //   firstname: FormControl<null>;
  //   // lastName: new ['', Validators.required],
  //   fullname: FormControl<null>; bankbranche: FormControl<null>; amount: FormControl<null>; phonenumber: FormControl<null>; date: FormControl<null>;
  // }>;

  constructor(private formBuilder: FormBuilder) {}

 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      // lastName: new ['', Validators.required],
      fullname: new FormControl(null,[Validators.required]),
      bankbranche: new FormControl(null,[Validators.required]),
      amount: new FormControl (null,[ Validators.required]), 
      phonenumber: new FormControl (null, [Validators.required]),
      date: new FormControl(null, [Validators.required, Validators.email]),
     
  });
  }

  
  onSubmit(){
    
  }

}
