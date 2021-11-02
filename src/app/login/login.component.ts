import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;


  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}
