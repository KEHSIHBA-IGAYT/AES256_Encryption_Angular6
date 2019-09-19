import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EncryptService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { 
  }

  encryptText(text) {
    const enText = {
      text: text
    };
    return this.http.post(`${this.uri}/encrypt`, enText);
  }

}
