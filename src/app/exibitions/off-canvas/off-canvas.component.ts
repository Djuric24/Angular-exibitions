import { Component, Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbdOffcanvasContent } from '../canvas-content/canvas-content.component';

@Component({
  selector: 'ngbd-offcanvas-component',
  standalone: true,
  templateUrl: './off-canvas.component.html',
})
export class NgbdOffcanvasComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  open() {
    const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
    offcanvasRef.componentInstance.name = 'World';
  }
}
