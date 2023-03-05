import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Exibition } from '../model/exibition.model';
import { ExibitionService } from '../services/exibition.service';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css'],
})
export class ExibitionsComponent implements OnInit {
  constructor(private service: ExibitionService) {}
  allExibitions: Exibition[] = [];
  ngOnInit(): void {
    this.getAllExibitions();
  }

  getAllExibitions() {
    this.service.getAllExibitions().subscribe((res: any) => {
      this.allExibitions = res;
    });
  }
}
