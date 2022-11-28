import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  readonly URL_API = environment.baseUrl + '/api/accounts';

  constructor(private http: HttpClient) { }

  getAccounts() {
    return this.http.get(this.URL_API+`/get`, {
      withCredentials: false,
    });
  }
}
