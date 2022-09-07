import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Boat } from '../model/boat';

@Injectable()
export class BoatServiceService {
  private boatsUrl: string;

  constructor(private http: HttpClient) {
    this.boatsUrl = 'http://localhost:8080/boats/';
  }

  public findAll(): Observable<Boat[]> {
    return this.http.get<Boat[]>(this.boatsUrl);
  }

  public save(boat: Boat) {
    return this.http.post<Boat>(this.boatsUrl, boat);
  }

  addBoat(boat: Object): Observable<Object> {
    return this.http.post(`${this.boatsUrl}`, boat);
  }

  deleteBoat(id: number): Observable<any> {
    return this.http.delete(`${this.boatsUrl}${id}`,{responseType: 'text'});
  }

  public getBoatById(id: number) : Observable<Boat> {
    console.log(`${this.boatsUrl}${id}`);
    return this.http.get<Boat>(`${this.boatsUrl}${id}`);
  }

  updateBoat(id: number, boat: Boat): Observable<any> {
    return this.http.put<Boat>(`${this.boatsUrl}${id}`, boat);
  }
}
