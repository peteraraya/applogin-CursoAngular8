import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Ocuparemos dos servicios

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyCvlPoOF9w5mu-fy847W9jyi0dZHSNnmgM'; // copiamos api key del setting de firebase del proyecto

  userToken: string;

  // Sign up with email/password | crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Sign with email/password | Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  //Iyecatamos nuestro servicio
  constructor(private http: HttpClient) {
    // Colocamos el leer el token al inicio para saber justo cuando ingresa verifica si tenemos un token o no
    this.leerToken();
  }

  // Cerrar sessión
  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    // Objeto usuario
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      // la ventaja del map que si se aparece un error el map nunca se dispara
      map(resp => {
        // console.log('entro en el mapa del RXJS');
        // se ejecuta solo si la función tiene exito , si el return trae un error el map nunca se va ejecutar
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  nuevoUsuario(usuario: UsuarioModel) {
    // añadir returnSecureToken
    // Una forma
    // const authData = {
    //   email: usuario.email,
    //   password: usuario.password,
    //   returnSecureToken: true
    // }

    //Otra forma
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    // Llamar nuestro servicio enciando una petición post

    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    ).pipe(
      // la ventaja del map que si se aparece un error el map nunca se dispara
      map( resp => {
        // console.log('entro en el mapa del RXJS');
        // se ejecuta solo si la función tiene exito , si el return trae un error el map nunca se va ejecutar
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );


  }

  private guardarToken(idToken: string) {

    this.userToken = idToken;
    // grabamos el token
    localStorage.setItem('token', idToken);

    //Validar fecha
    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira',hoy.getTime().toString());
  }

  private leerToken() {
    // Verificamos si tenemos información
    if (localStorage.getItem('token')) {
      // si existe lo leemos del localstorage
      this.userToken = localStorage.getItem('token');
    } else {
      // si no existe el token
      this.userToken = '';
    }

    return this.userToken;
  }

  //Metodo para saber si el usuario que está autenticado

  estaAutotenticado(): boolean{
    // return this.userToken.length>2; validación correcta pero incompleta

        //Validar fecha
        if ( this.userToken.length < 2 ){
          return false; // token no existe
        }

        const  expira = Number(localStorage.getItem('expira'));

        // transforma expira en fecha
        const expiraDate = new Date();
        expiraDate.setTime(expira);

        // Está fecha es mayor en momento actual?
        if(expiraDate > new Date()){
          return true;
        }else{
          return false;
        }


  }
  
}

