import { Component } from '@angular/core';
import { MatCardTitle } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
// import { AddVehicleComponent } from './pages/add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'zbss';

  images = [
    {
      imageSrc:
      'img src="assets/images/karibu.jpg"'
    },
    {
      imageSrc:
      'assets/images/lion-of-africa-madiba.jpg'
    },{
      imageSrc:
      'assets/images/max-kamundi-80x80cm-oil.jpg"'
    },
    {
      imageSrc:
      'assets/images/art2.jpg"'
    },
    {
      imageSrc:
      'assets/images/art1.jpg"'
    },

  ]

  private _dialog: any;

  constructor(private_dialog: MatDialog){}
  // openAddVehicleForm(){
  //   this._dialog.open(AddVehicleComponent);
  // }

  deleteUser(id: number){
    this._dialog.deleteUser(id).subscribe({
      next: () => {
        alert('User deleted');
      },
      error: console.log,
      
    })
  }
}
