import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  private host = "https://ghibliapi.herokuapp.com";

  constructor(private http: HttpClient) { }

  public getMovies(callback: (films: any[]) => void): void
  {
    this.http.get<any[]>(this.host + "/films").
      subscribe((films: any[]) =>
      {
        callback(films);
      })
  }
}
