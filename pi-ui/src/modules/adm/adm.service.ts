import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { editAmountRequest, editProductRequest } from 'src/app/core/models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdmService {
  private baseAPIUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseAPIUrl + 'api/Product/getallproducts');
  }

  postProduct(product:any): Observable<any[]> {
    return this.http.post<any>(this.baseAPIUrl + 'api/Product/createproduct', product);
  }

  updateAmount(product:editAmountRequest): Observable<any[]> {
    return this.http.put<any[]>(this.baseAPIUrl + 'api/Product/quantitychange', product);
  }

  updateProduct(product:editProductRequest): Observable<any[]> {
    return this.http.put<any[]>(this.baseAPIUrl + 'api/Product/editproduct', product);
  }
}