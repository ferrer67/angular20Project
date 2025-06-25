import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css'
})
export class SignalExample {
  firstName: string = "Sergi";
  productName = "Ferrer";

  courseName = signal<string>("Angular");

  courseDuration = signal("15 videos");
  courseDetails = computed(()=> this.courseName()+ " - " + this.courseDuration())

  constructor(){
    this.firstName = "Marc";
    console.log(this.firstName)

    this.courseName.set("React");
    console.log(this.courseName())

  }
}
