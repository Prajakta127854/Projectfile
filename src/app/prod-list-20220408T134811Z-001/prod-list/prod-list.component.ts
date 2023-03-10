import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common-20220408T134904Z-001/common/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  products:Product[]

  constructor(private prodService : ProductService, private route:Router) 
  { }

  ngOnInit(): void 
  {
    this.grtAllProduct();
  }
  grtAllProduct()
   {
     this.prodService.grtAllProduct().subscribe(data=>
      {
        console.log(data);
        this.products=data
      });
   }
   addProd()
   {
     this.route.navigateByUrl("/prodform")
   }
   updateProd(fbproductid:number)
   {
     this.route.navigateByUrl("/updateProd/" +fbproductid);
   }
   deleteProd(fbproductid:number)
   {
     console.log(fbproductid);
     if(confirm("Do You Want Delete?"))
     {
       this.prodService.deleteProduct(fbproductid).subscribe(data=>{
        console.log(data);
        this.grtAllProduct})
     }

   }

}
