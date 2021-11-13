import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceLogginService } from '../Services/service-loggin.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;
  constructor(public router: Router, private service: ServiceLogginService) { }

  ngOnInit(): void {
  }

  guardar(){
    const newUser = { user: this.miFormulario.value }
    this.service.create(newUser).subscribe(res => {
      if(!res) {
        Swal.fire({
          icon: 'success',
          title: 'Message',
          text: 'Cuenta creada exitosamente...'
        })
        this.router.navigate(['login']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al crear cuenta'
        })
      }
    });
    
  }
}
