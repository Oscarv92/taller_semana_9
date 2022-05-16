import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './componente/barra/barra.component';

import { InicioComponent } from './componente/inicio/inicio.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { ComponenteComponent } from './componente/componente/componente.component';
import { FooterComponent } from './componente/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    FormularioComponent,
    CalculadoraComponent,
    ComponenteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
