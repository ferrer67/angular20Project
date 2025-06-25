import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Angular 20 tutorial";
  productPrice: number = 12500;
  classColor: string = "pcolor"

  constructor(){
  }

  getCourseName(){
    this.courseName = NgModel.name

  }

  showWelcomeMessage(){
    alert("Welcome to angular 20")
  }

  changeCourseName(){
    this.courseName = "REACT"
  }

}
