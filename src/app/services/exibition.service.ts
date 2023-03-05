import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exibition } from '../model/exibition.model';

@Injectable({
  providedIn: 'root',
})
export class ExibitionService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/api/exibitions';

  getAllExibitions() {
    return this.http.get(this.url);
  }
  getSingleExibition(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  getSingleExibitionArtwork(id: number) {
    return this.http.get(this.url + '/' + id + '/artworks');
  }
  getAllArtwork(params?: any) {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('sort', 'author')
          .set('sortDirection', 'asc')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }
    return this.http.get('http://localhost:3000/api/artworks', queryParams);
  }
  addArtwork(exId: number, artId: number, artWork: any) {
    return this.http.put(`${this.url}/${exId}/artworks/${artId}`, artWork);
  }
  deleteArtwork(exId: number, artId: number, artWork: any) {
    return this.http.delete(`${this.url}/${exId}/artworks/${artId}`, artWork);
  }
  getLocations() {
    return this.http.get('http://localhost:3000/api/locations');
  }
  addExibition(exibition: any, location: any) {
    exibition.location = location;
    console.log(exibition.location.site);
    let toAdd = new Exibition(exibition);
    //iako mi se cini da zahter za dodavanje izlozbe ima sve sto treba ipak ne ispisuje na kraju na glavnoj strani
    return this.http.post(this.url, toAdd);
  }
}
