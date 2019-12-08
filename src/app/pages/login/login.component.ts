import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.models';
import { AuthService } from '../../services/auth.service';
import { switchAll } from 'rxjs/operators';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Creamos una instancia del usuarioModel
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    Swal.fire({
      // prevenir que la persona pueda cerrar el sweet alter afuera
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor'
    });
    // Boton que simula un loading
    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();

        // si tenemos un usuario valido
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }

        // navegaremos al home
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
        // si tenemos un error
        Swal.fire({
          // prevenir que la persona pueda cerrar el sweet alter afuera
          allowOutsideClick: false,
          type: 'error',
          text: err.error.error.message
        });
      });
    // console.log('Imprimir si el formulario es valido');
    // validar
    // console.log(form);
  }
}
