import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Creamos una instancia del usuarioModel
  usuario: UsuarioModel;
  recordarme = false;
  // iyectamos el servicio
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    // Incializamos el usuario
    this.usuario = new UsuarioModel();
    // this.usuario.email = 'piteraraya@gmail.com';



  }



  onSubmit(form: NgForm) {
    // si el formulario noi es valido lo unico que quiero hacer es un return y salirme
    if (form.invalid) { return; }

    Swal.fire({
      // prevenir que la persona pueda cerrar el sweet alter afuera
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor'
    });
    // Boton que simula un loading
    Swal.showLoading();

    // console.log('Formulario enviado');
    // console.log(this.usuario);
    // console.log(form);

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(respuesta => {
        console.log(respuesta);
        Swal.close();

        // si tenemos un usuario valido
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }



        // navegaremos al home
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          // prevenir que la persona pueda cerrar el sweet alter afuera
          allowOutsideClick: false,
          type: 'error',
          title:'Error al autenticar',
          text: err.error.error.message
        });
      });

  }

}
