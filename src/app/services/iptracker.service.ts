import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IP } from '../interface/ip.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IptrackerService {
  apiKey: string = 'at_e1ijmZ1JPeoBVzRxESdwh8gSuEN5W';
  baseUrl: string = 'https://geo.ipify.org/api/v1';
  /* https://geo.ipify.org/api/v1?apiKey=at_e1ijmZ1JPeoBVzRxESdwh8gSuEN5W&ipAddress=8.8.8.8 */

  constructor(private http: HttpClient) {
  }

  getIpData(ip: string): Observable<IP>{
    return this.http.get<IP>(this.baseUrl + '?apiKey=' + this.apiKey + '&ipAddress=' + ip);
  }

  getIpAddress() {
    return this.http
      .get('https://api.ipify.org/?format=json');
      //.pipe(catchError(this.handleError));
  }




}
