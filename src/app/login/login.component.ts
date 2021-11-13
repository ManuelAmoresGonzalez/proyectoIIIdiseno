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
    this.service.login(this.miFormulario.value).subscribe(res=>{
      if(res?.error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.error
        })
      } else {
        this.service.currentUser = res;
        this.router.navigate(['vistaservicio']);
      }
    })  
  }
}
