import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  enterShowLink : boolean = false;
  mostrarEnlaces : boolean = false;
  cont: number =0;
  largeWindon: boolean = false;

  ngOnInit(): void {
    this.notAlone()

    if(!this.mostrarEnlaces) this.onWindowResize(null);
    
  }

  constructor(private router: Router) { }

  /**
   * @param onWindowResize
   * implementado para saber cuando la pantalla es menor a 600px
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    
    this.largeWindon=window.innerWidth > 600;
    this.mostrarEnlaces = window.innerWidth > 600;
    // console.log(this.mostrarEnlaces)
  }


  /**
   * @param afuera
   * implementado para saber cuando el usuario le da clic fuera
   * del menu y asi poder ocultarlo
   */
  @ViewChild('enlaces2', { static: true }) nav!: ElementRef;

  //Verificamos los clics en el DOM
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // verificamos si donde hacemos clic no es el elemento del div ni esta dentro de este
    if (
      !this.nav.nativeElement.contains(event.target) &&
      event.target !== this.nav.nativeElement
    ) {
      //console.log('Clic fuera del elemento div');
      if(!this.largeWindon){
        this.mostrarEnlaces=false;
      }
      
    }
  }
  

  cambiarMenu(){    
    this.mostrarEnlaces=true;
    this.cont++;
  }

  containerInicio(){
    if(!this.largeWindon) this.mostrarEnlaces=false;
    this.router.navigate(['/start'])
  }

  containerConocimientos(){
    if(!this.largeWindon) this.mostrarEnlaces=false;
    this.router.navigate(['/knowledge'])
  }

  containerProyectos(){
    if(!this.largeWindon) this.mostrarEnlaces=false;
    this.router.navigate(['/projects'])
  }

  containerDocumentos(){
    if(!this.largeWindon) this.mostrarEnlaces=false;
  }

notAlone(){
}

}
