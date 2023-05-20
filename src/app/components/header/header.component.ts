import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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

  /**
   * @param onWindowResize
   * implementado para saber cuando la pantalla es menor a 600px
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    
    this.largeWindon=window.innerWidth > 600;
    this.mostrarEnlaces = window.innerWidth > 600;
    console.log(this.mostrarEnlaces)
  }


  /**
   * @param afuera
   * implementado para saber cuando el usuario le da clic fuera
   * del menu y asi poder ocultarlo
   */
  @ViewChild('enlaces2', { static: true }) miDiv!: ElementRef;

  // Listener para el evento de clic en cualquier parte del documento
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Verificar si el objetivo del evento no es el elemento div ni un descendiente directo del mismo
    if (
      !this.miDiv.nativeElement.contains(event.target) &&
      event.target !== this.miDiv.nativeElement
    ) {
      console.log('Clic fuera del elemento div');
      if(!this.largeWindon){
        this.mostrarEnlaces=false;
      }
      
    }
  }
  



  cambiarMenu(){
    this.mostrarEnlaces=true;
    this.cont++;
    console.log(this.mostrarEnlaces)
  }

  containerInicio(){
    this.mostrarEnlaces=false;
    console.log(this.mostrarEnlaces)
  }

  containerConocimientos(){
    this.mostrarEnlaces=false;
    console.log(this.mostrarEnlaces)
  }

  containerProyectos(){
    this.mostrarEnlaces=false;
    console.log(this.mostrarEnlaces)
  }

  containerDocumentos(){
    this.mostrarEnlaces=false;
    console.log(this.mostrarEnlaces)
  }

notAlone(){
 console.log(
"\n" +
 ".                     ."+"\n" +
 ".       .-----.       ." + "\n" +
 ".      /       \\\      ."+ "\n" +
 ".     /_       _\\\     ."+ "\n" +
 ".    // \\\     / \\\\\    ."+ "\n" +
 ".    |\\\__\\\   /__/|    ."+ "\n" +
 ".    \\\    | |    /    ."+ "\n" +
 ".     \\\         /     ."+ "\n" +
 ".      \\\  __   /      ."+ "\n" +
 ".       '.___.'       ."+ "\n" +
 ".        |   |        ."+ "\n" +
 ".  You are not alone  ."+ "\n" +
 ".   domain/notalone   ."+ "\n"
 )
 	
}

}
