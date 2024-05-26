import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { editAmountRequest, ProductRequest } from 'src/app/core/models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdmService {
  private baseAPIUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //PRODUCT
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseAPIUrl + 'api/Product/getallproducts');
  }

  postProduct(product:ProductRequest): Observable<any> {
    return this.http.post<any>(this.baseAPIUrl + 'api/Product/createproduct', product);
  }

  updateProduct(product:ProductRequest): Observable<any> {
    return this.http.put<any>(this.baseAPIUrl + 'api/Product/editproduct', product);
  }

  updateAmount(product:editAmountRequest): Observable<any> {
    return this.http.put<any>(this.baseAPIUrl + 'api/Product/quantitychange', product);
  }



  //USER
  getDataUser(): Observable<any[]> {
    return this.http.get<any[]>(this.baseAPIUrl + 'api/User/getallusers');
  }

  postUser(user:any): Observable<any[]>{
    return this.http.post<any>(this.baseAPIUrl + 'api/User/createuser', user)
  }

  updateUser(user:any): Observable<any[]>{
    return this.http.put<any>(this.baseAPIUrl +'api/User/edituser', user)
  }
}