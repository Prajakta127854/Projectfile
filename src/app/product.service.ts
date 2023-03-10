import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './common-20220408T134904Z-001/common/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService 
{

 private produrl="http://localhost:8080/api/product";

  constructor(private httpclient:HttpClient)
  { 
  }
  grtAllProduct():Observable<Product[]>
  {
    return this.httpclient.get<GetProductResponse>(this.produrl).pipe(map(response=>response._embedded.fbproducts))
  }
  saveProduct(product: Product):Observable<Product>
  {
    const httpoptions=
    {
      headers:new HttpHeaders(
        {
          'content-Type':'application/json',
          'Authorization':'auth-token',
          'Access-control-Allow-origin':'*'
        })
    };
    return this.httpclient.post<Product>(this.produrl,product,httpoptions);
  }
  getProductById(prodID:number):Observable<Product>
  {
    const prodIDURL=this.produrl+"/"+prodID;
    return this.httpclient.get<Product>(prodIDURL);
  }
  updateProduct(product: Product):Observable<Product>
  {
    const httpoptions=
    {
      headers:new HttpHeaders(
        {
          'content-Type':'application/json',
          'Authorization':'auth-token',
          'Access-control-Allow-origin':'*'
        })
    };
    return this.httpclient.put<Product>(this.produrl+`/${product.fbproductid}`,product,httpoptions);
  }
  deleteProduct(fbproductid:number)
  {
    const httpoptions=
    {
      headers:new HttpHeaders(
        {
          'content-Type':'application/json',
          'Authorization':'auth-token',
          'Access-control-Allow-origin':'*'
        })
    };
    return this.httpclient.delete<Product>(this.produrl+`/${fbproductid}`,httpoptions);
  }
}
interface GetProductResponse
   {
     _embedded:
     {
      fbproducts:Product[]
     }
   }