import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements  OnInit{
    
  userForm!: FormGroup;
    loading = true;
    submitted = true;
    router: any;


    constructor( private userService: UserService) {}

    ngOnInit(): void {
        this.userForm = new FormGroup({
            firstname: new FormControl(null, [Validators.required]),
            // lastName: new ['', Validators.required],
            lastname: new FormControl(null,[Validators.required]),
            address: new FormControl(null,[Validators.required]),
            username: new FormControl (null,[ Validators.required]), 
            gender: new FormControl (null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl (null, [Validators.required, Validators.minLength(6)]),
            confirmpassword: new FormControl (null,[Validators.required]),
            phonenumber: new FormControl (null,[Validators.required]),
            dateofbirth: new FormControl (null, Validators.required)
        });
    }

    // convenience getter for easy access to form fields // this.submitted = true;

        //
    // get f() { return this.userForm.controls; }

    onSave() {
        const values = this.userForm.value;
        this.userService.addUsers(values).subscribe();
        this.router.navigateByUrl('../user-home');
        // console.log ('user form value =>', values);
        // this.userService.addUsers(this.userForm.value);
    }
}
