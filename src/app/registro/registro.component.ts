import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  guardar(){
 
    console.log(this.miFormulario.value.name);
    console.log(this.miFormulario.value.direction);
    console.log(this.miFormulario.value.phone);
    console.log(this.miFormulario.value.description);
    console.log(this.miFormulario.value.correo);
    console.log(this.miFormulario.value.password);
    
  }
}
