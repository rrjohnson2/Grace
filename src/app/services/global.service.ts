import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url ='http://localhost:8080/send';
  private httpOptions= 
  { 
    headers: new HttpHeaders(
      {
        "Content-Type":"application/json"
      }
    )
  };

  constructor(private http:HttpClient) { }

  public send(sms):Observable<any>
  {
    console.log("made")
    return this.http.post<any>(this.url,sms,this.httpOptions);
  }
}
