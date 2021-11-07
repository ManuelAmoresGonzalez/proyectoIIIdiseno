import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceLogginService } from '../Services/service-loggin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;


  constructor(public router: Router, private service: ServiceLogginService) { }
  
  ngOnInit(): void {
  }

  guardar(){
    this.service.getDepList(this.miFormulario.value).subscribe(res=>{
      console.log(res);
    })
    console.log(this.miFormulario.value.user);
    console.log(this.miFormulario.value.password);
    /*if(this.miFormulario.value.user == "Hola" && this.miFormulario.value.password == "hola"){
      this.router.navigate(['vistaservicio']);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tus credenciales son incorrectas'
      })
    }    */
  }
}
