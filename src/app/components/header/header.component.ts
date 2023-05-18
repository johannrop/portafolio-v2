import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarEnlaces : boolean = false;

  largeWindon: boolean = false;



  ngOnInit(): void {
    if(!this.mostrarEnlaces) this.onWindowResize(null);
    
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.mostrarEnlaces = window.innerWidth > 600;
    console.log(this.mostrarEnlaces)
 
    

  }

  cambiarMenu(){
    this.mostrarEnlaces=true;
    console.log(this.mostrarEnlaces)
  }

  containerInicio(){
    this.mostrarEnlaces=false;
    console.log(this.mostrarEnlaces)
  }

  containerConocimientos(){
    this.mostrarEnlaces=false;
  }

  containerProyectos(){
    this.mostrarEnlaces=false;
  }

}
