import { Component, Input, OnInit } from '@angular/core';
interface carouselImages{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  
  @Input() images: carouselImages[] = []

  selectedIndex = 0;
  ngOnInit(): void {
    
  }

  status = false;
slideConfig: any;
// images: any;
  addToggle()
  {
    this.status = !this.status;       
  }



  // slick: any-slider{  
  //   width: 90%  
  //   margin. auto;  
  // }

  // Images = [  
  //   { img: "../assets/images/1.jpg" },  
  //   { img: "../assets/images/2.jpg" },  
  //   { img: "../assets/images/3.jpg" },  
  //   { img: "../assets/images/4.jpg" },  
  //   { img: "../assets/images/5.jpg" },  
  //   { img: "../assets/images/6.jpg" },  
  //   { img: "../assets/images/7.jpg" },  
  //   { img: "../assets/images/8.jpg" },  
  //   { img: "../assets/images/9.jpg" },  
  // ];  
  
  // const slideConfig = {  
  //   "slidesToShow": 3,  
  //   "slidesToScroll": 3,  
  //   "dots": true,  
  //   "infinite": true  
  // };  
  

    // myScriptElement:HTMLScriptElement;
  
    // constructor() { 
  
    //   this.myScriptElement = document.createElement("script");
    //   this.myScriptElement.src = "assets/js/main.js";
    //   document.body.appendChild(this.myScriptElement);
    // }
  
    // ngOnInit(): void {
    // }
  
}
