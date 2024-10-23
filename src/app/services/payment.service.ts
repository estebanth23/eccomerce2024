import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPayment } from '../common/data-payment';
import { Observable } from 'rxjs';
import { UrlPaypalResponse } from '../common/url-paypal-response';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl:string = 'http://localhost:8080/api/v1/payments';

  constructor(private httpClient:HttpClient, private headerService: HeaderService) { }

  getUrlPaypal(dataPayment: DataPayment):Observable<UrlPaypalResponse>{
    return this.httpClient.post<UrlPaypalResponse>(this.apiUrl, dataPayment, {headers: this.headerService.headers});
  }

}
