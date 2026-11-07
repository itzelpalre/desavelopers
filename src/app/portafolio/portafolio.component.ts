import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  selectedImage: string | null = null;
  selectedAlt: string = '';

  openImage(imageSrc: string, imageAlt: string): void {
    this.selectedImage = imageSrc;
    this.selectedAlt = imageAlt;
  }

  closeImage(): void {
    this.selectedImage = null;
    this.selectedAlt = '';
  }

}
