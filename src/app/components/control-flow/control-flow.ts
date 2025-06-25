import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  idshow: string = "show";
  idhide: string = "hide";

  isParaVisible: boolean = false;

  lista = ["hola", 1];

}
