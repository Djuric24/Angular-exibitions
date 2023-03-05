import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Artwork } from 'src/app/model/artwork.model';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionService } from 'src/app/services/exibition.service';
import { NgbdOffcanvasContent } from '../canvas-content/canvas-content.component';
@Component({
  selector: 'app-exibition-details',
  templateUrl: './exibition-details.component.html',
  styleUrls: ['./exibition-details.component.css'],
})
export class ExibitionDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ExibitionService,
    private offcanvasService: NgbOffcanvas
  ) {}
  showEdit = false;
  id: number = NaN;
  singleExibition: Exibition = new Exibition();
  artwork: Artwork[] = [];
  allArtwork: any;
  params = {
    filter: {
      author: '',
    },
  };
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getSingleExibition();
      this.getArtwork();
      this.getAllArtwork();
    });
  }
  getSingleExibition() {
    this.service
      .getSingleExibition(this.id)
      .subscribe((res: any) => (this.singleExibition = res));
  }
  getArtwork() {
    this.service.getSingleExibitionArtwork(this.id).subscribe((res: any) => {
      this.artwork = res;
    });
  }
  getAllArtwork() {
    this.service.getAllArtwork(this.params).subscribe((res: any) => {
      this.allArtwork = res;
    });
  }
  getFilteredArtwork() {
    this.getAllArtwork();
  }
  addArtwork(item: any) {
    this.service.addArtwork(this.id, item._id, item).subscribe((res: any) => {
      this.getAllArtwork();
      this.getArtwork();
    });
  }
  deleteArtWork(item: any) {
    this.service
      .deleteArtwork(this.id, item._id, item)
      .subscribe((res: any) => {
        this.getAllArtwork();
        this.getArtwork();
      });
  }
  open(item: any) {
    const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent, {
      position: 'end',
    });
    offcanvasRef.componentInstance.item = item;
  }
}
