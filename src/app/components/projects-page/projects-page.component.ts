import { Component, Renderer2 } from '@angular/core';



@Component({
  selector: 'projects',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  textarea = this.renderer.createElement('textarea');

  constructor(private renderer: Renderer2) {}
  
  register: string = `
  {
    "name": "Allan",
    "lastname": "Poe",
    "email": "allan@c.c",
    "pass": "poe12345"
  }

  `;

  copyRegister() {
    this.renderer.setProperty(this.textarea, 'value', this.register);
    this.renderer.appendChild(document.body, this.textarea);
    this.textarea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, this.textarea);
    console.log('Texto copiado al portapapeles: ' + this.register);
    // Puedes mostrar una notificación o realizar alguna acción adicional aquí
  }


  copyListLink() {
    this.renderer.setProperty(this.textarea, 'value',"https://johannrop.bio/api/list");
    this.renderer.appendChild(document.body, this.textarea);
    this.textarea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, this.textarea);
  }

  copyUpdateLink() {
    this.renderer.setProperty(this.textarea, 'value',"https://johannrop.bio/api/update/{id}");
    this.renderer.appendChild(document.body, this.textarea);
    this.textarea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, this.textarea);
  }

  copyRegisterLink() {
    this.renderer.setProperty(this.textarea, 'value',"https://johannrop.bio/api/register");
    this.renderer.appendChild(document.body, this.textarea);
    this.textarea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, this.textarea);
  }

  copyDeleteLink() {
    this.renderer.setProperty(this.textarea, 'value',"https://johannrop.bio/api/delete/{id}");
    this.renderer.appendChild(document.body, this.textarea);
    this.textarea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, this.textarea);
  }



  mostrarTarjeta(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'block';
    }
  }
  
  ocultarTarjeta(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'none';
    }
  }

  

}
