import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public service : ServiceService){}

  datos:any={}

  ngOnInit(){
    this.service.obtenerDatos().subscribe(data=>{
      this.datos=data;
    })
  }

  

}
