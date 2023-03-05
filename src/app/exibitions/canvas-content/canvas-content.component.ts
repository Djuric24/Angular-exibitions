import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Artwork } from 'src/app/model/artwork.model';

@Component({
  selector: 'ngbd-offcanvas-content',
  standalone: true,
  templateUrl: './canvas-content.component.html',
  styleUrls: ['./canvas-content.component.css'],
})
export class NgbdOffcanvasContent {
  constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
  @Input() item: Artwork = new Artwork();
}
