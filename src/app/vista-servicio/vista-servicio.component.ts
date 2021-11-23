import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceLogginService } from '../Services/service-loggin.service';

@Component({
  selector: 'app-vista-servicio',
  templateUrl: './vista-servicio.component.html',
  styleUrls: ['./vista-servicio.component.css']
})
export class VistaServicioComponent implements OnInit {
  user: any

  constructor(private loggin: ServiceLogginService) { }

  editEmail() {
    this.loggin.update(this.user).subscribe(res => {
      if(res?.error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.error
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: '',
          text: "Email modificado"
        })
      }
    });
  }

  ngOnInit(): void {
    this.user = this.loggin.currentUser;
    console.log(this.user);
    this.user.lastName = this.user.name.split(" ")[1];
    this.user.firstName = this.user.name.split(" ")[0];
  }

}
