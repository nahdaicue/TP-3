import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { DescargarComponent } from './component/descargar/descargar.component';
import { RouterModule, Routes } from '@angular/router';


//Rutas
const appRoutes: Routes=[
{path:'', component: QuienSoyComponent},
{path:'proyectos', component: ProyectosComponent},
{path:'contacto', component: ContactoComponent},
{path:'descargar', component: DescargarComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ContactoComponent,
    QuienSoyComponent,
    ProyectosComponent,
    DescargarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
