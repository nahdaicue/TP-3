import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {

constructor( public service : ServiceService){}

// datos de data base

datos:any={}

ngOnInit(){
  this.service.obtenerDatos().subscribe(data=>{
    this.datos=data
  })
}

// botones

mostrarInput1:Boolean=false;
mostrarInput2:Boolean=false;

mostrar_btn1():void{
  this.mostrarInput1=!this.mostrarInput1;
}

mostrar_btn2():void{
  this.mostrarInput2=!this.mostrarInput2;
}

// por si es necesario :)

onClick():void{
  
}

// ENVIAR DATOS
// trim(): en JavaScript se utiliza para eliminar los espacios en blanco al principio y al final de una cadena de texto.

nuevoQuien:{ Quien:string} = {Quien:""}

enviarDatos1():void{
  if (this.nuevoQuien.Quien.trim() !== '') {
    this.datos.QuienSoy = this.nuevoQuien.Quien;
    this.nuevoQuien = { Quien: ''};
} else {
    alert('Por favor, completa los campos');
}
}



nuevoEstudio:{ donde:string, descripcion:string } = {donde:"", descripcion:""}

enviarDatos2():void{
  if (this.nuevoEstudio.donde.trim() !== '' && this.nuevoEstudio.descripcion.trim() !== '') {
    this.datos.estudios.push(this.nuevoEstudio);
    this.nuevoEstudio = { donde: '', descripcion: '' };
} else {
    alert('Por favor, completa los campos');
}
}

}
