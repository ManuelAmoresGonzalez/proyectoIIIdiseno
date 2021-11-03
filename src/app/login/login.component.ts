import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario.value.user);
    console.log(this.miFormulario.value.password);
    if(this.miFormulario.value.user == "Hola" && this.miFormulario.value.password == "hola"){
      this.router.navigate(['vistaservicio']);
    }else{
      console.log("No se puede entrar")
    }    
  }
}
