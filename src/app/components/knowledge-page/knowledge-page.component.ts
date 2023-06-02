import { Component } from '@angular/core';

@Component({
  selector: 'knowledge',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.css']
})
export class KnowledgePageComponent {
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
