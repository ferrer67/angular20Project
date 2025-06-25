import { Component } from '@angular/core';
import { ControlFlow } from "../control-flow/control-flow";

@Component({
  selector: 'app-admin',
  imports: [ControlFlow],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  firstName = "Sergi";

  courseName = "Angular 20 tutorial";

  rollNumber = 111;

}
