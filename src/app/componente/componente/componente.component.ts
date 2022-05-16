import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css'],
  })
export class ComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  likeInu(){
    Swal.fire({
      icon: 'success',
      title: 'Akita Inu',
      text: 'Gracias por tu LIKE',
    })
  }

  likeAme(){
    Swal.fire({
      icon: 'success',
      title: 'Akita Americano',
      text: 'Gracias por tu LIKE',
    })
  }



}
