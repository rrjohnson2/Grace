import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url ='http://ec2-3-17-4-85.us-east-2.compute.amazonaws.com:8080/send';
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
    return this.http.post<any>(this.url,sms,this.httpOptions);
  }
}
