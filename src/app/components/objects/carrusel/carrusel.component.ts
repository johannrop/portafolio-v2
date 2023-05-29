import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  private carouselInterval: any;
  private currentIndex = 0;
  boton : boolean = false

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  pauseCarousel(): void {
    this.stopCarousel();
  }

  nextSlide(): void {
    const slides = document.getElementsByClassName('slide-open');
    const nextIndex = (this.currentIndex + 1) % slides.length;
    
    (slides[nextIndex] as HTMLInputElement).click();
    this.currentIndex = nextIndex;
  }

  stopCarousel(): void {
    clearInterval(this.carouselInterval);
  }

}
