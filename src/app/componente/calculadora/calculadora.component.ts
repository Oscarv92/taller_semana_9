import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1!:number;
  num2!:number;
  resultado!:number;

  mensaje_ok:any;
  mensaje_errornum1:any;
  mensaje_errornum2:any;

  constructor() { }

  ngOnInit(): void {

  }

  sumar(){

    if(this.num1==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 1!',
      })
    }

    else if(this.num2==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 2!',
      })
    }
    
    else{
      this.resultado= this.num1+this.num2;
      this.mensaje_ok="Operación realizada con exito"
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'La operación es correcta',
      })
    }

  }

  restar(){

    if(this.num1==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 1!',
      })
    }

    else if(this.num1==0){
      this.mensaje_errornum1="Valor ingresado menor o igual a 0, por favor ingrese un valor mayor"
    }

    else if(this.num2==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 2!',
      })
    }

    else if(this.num2==0){
      this.mensaje_errornum2="Valor ingresado menor o igual a 0, por favor ingrese un valor mayor"
    }
    
    else{
      this.resultado=this.num1-this.num2
      this.mensaje_ok="Operación realizada con exito"
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'La operación es correcta',
      })
    }

    
  }

  multiplicar(){

    if(this.num1==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 1!',
      })
    }

    else if(this.num2==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 2!',
      })
    }
    
    else{
      this.resultado=this.num1*this.num2
      this.mensaje_ok="Operación realizada con exito"
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'La operación es correcta',
      })
    }

  }

  dividir(){

    if(this.num1==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 1!',
      })
    }

    else if(this.num1==0){
      this.mensaje_errornum1="Valor ingresado menor o igual a 0, por favor ingrese un valor mayor"
    }

    else if(this.num2==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha ingresado un valor en Número 2!',
      })
    }

    else if(this.num2==0){
      this.mensaje_errornum2="Valor ingresado menor o igual a 0, por favor ingrese un valor mayor"
    }
    
    else{
      this.resultado=this.num1/this.num2
      this.mensaje_ok="Operación realizada con exito"
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'La operación es correcta',
      })
    }

    
  }


}
