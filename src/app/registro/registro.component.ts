import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FileUploadService } from '../Services/file-upload.service';
import { ServiceLogginService } from '../Services/service-loggin.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  file: any

  @ViewChild('miFormulario') miFormulario !: NgForm;
  constructor(public router: Router, private service: ServiceLogginService, private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(ev: any) {
    this.file = ev.target.files[0];
  }

  guardar() {
    this.uploadService.pushFileToStorage(this.file).then(imageUrl => {
      const newUser = { user: this.miFormulario.value }
      newUser.user.image = imageUrl;
      this.service.create(newUser).subscribe(res => {
        if (!res) {
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
    });
  }
}
