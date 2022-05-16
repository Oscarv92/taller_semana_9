import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formvalue!:FormGroup;

  public data_detalle : Array<any>=[];
  public ciudad = ["Bogotá", "Cali", "Medellin", "Pasto", "Bucaramanga", "Villavicencio", "Neiva", "Barranquilla", "Cartagena", "San Andres"];
  public contador : any;
  public suma: any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.CamposFormulario();
  }

  CamposFormulario(){
    this.formvalue=this.formBuilder.group({
      nombres:[''],
      apellidos:[''],
      edad:[''],
      ciudad:[''],
      donacion:['']
    })
  }

  guardarInfo(detalleForm : any){

    if(detalleForm.value.nombres==""){
      Swal.fire({
        title: 'Error!',
        text: 'El campo Nombre no puede estar vacio',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(detalleForm.value.apellidos==""){
      Swal.fire({
        title: 'Error!',
        text: 'El campo Apellido no puede estar vacio',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(detalleForm.value.edad==""){
      Swal.fire({
        title: 'Error!',
        text: 'El campo Edad no puede estar vacio',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(detalleForm.value.ciudad==0){
      Swal.fire({
        title: 'Error!',
        text: 'El campo Ciudad no puede estar vacio',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(detalleForm.value.donacion==""){
      Swal.fire({
        title: 'Error!',
        text: 'Agradecemos tu donativo',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else{
      this.data_detalle.push({
        nombres: detalleForm.value.nombres,
        apellidos: detalleForm.value.apellidos,
        edad: detalleForm.value.edad,
        ciudad: detalleForm.value.ciudad,
        donacion: detalleForm.value.donacion
      })
      this.contador=this.data_detalle.length
      Swal.fire(
        'Gracias por tu apoyo!',
        'La información se guardo correctamente!',
        'success'
      )
      this.formvalue=this.formBuilder.group({
        nombres:[''],
        apellidos:[''],
        edad:[''],
        ciudad:[''],
        donacion:['']
      })
    }
  }

  eliminar(indice:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.data_detalle.splice(indice,1)
    this.contador=this.data_detalle.length
        Swal.fire(
          'Eliminado!',
          'Su archivo ha sido eliminado.',
          'success'
        )
      }
    })
  }




}
