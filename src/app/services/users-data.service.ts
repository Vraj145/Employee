import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url = "https://mocki.io/v1/ae973397-eff8-4eb9-8728-ac9056ebe46e";

  constructor(private http: HttpClient) { }

  users()
  {
    return this.http.get(this.url);
  }

}
