import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  private appendHeader(headers: HttpHeaders): HttpHeaders{
    headers = headers || new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  public get(path: string, options?: { headers?: HttpHeaders }): Observable<any>{
    options = options || {};
    options.headers = this.appendHeader(options.headers);
    return this.http.get(`${this.backendUrl}${path}`, { headers: options.headers });
  }

  public delete(path: string, options?: { headers?: HttpHeaders }): Observable<any>{
    options = options || {};
    options.headers = this.appendHeader(options.headers);
    return this.http.delete(`${this.backendUrl}${path}`, { headers: options.headers });
  }
}
