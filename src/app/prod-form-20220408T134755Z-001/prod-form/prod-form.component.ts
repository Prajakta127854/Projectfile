import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/common-20220408T134904Z-001/common/product';



@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit 
{


  product: Product=new Product(0,"","",0.0,"",1,new Date(),new Date(),0,0);
  isEditable:boolean;
  constructor(public prodservice:ProductService,public route:Router,public activateRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.getProductById());
  }     
  getProductById()
  {
    const prodID = parseFloat(this.activateRoute.snapshot.paramMap.get("fbproductid"));
    console.log(prodID)
    if(prodID>0)
    {
      this.isEditable=true;
      this.prodservice.getProductById(prodID).subscribe(data=>
      {
        this.product=data;
        console.log(this.product);
      });
    }
  }
  onSubmit():void
  {
    console.log(this.product); 
    if(this.isEditable){
    this.prodservice.updateProduct(this.product).subscribe(data=>
     
      this.route.navigateByUrl("/products"));
    }
    else
    {
      this.prodservice.saveProduct(this.product).subscribe(data=>
        console.log(data));
        this.route.navigateByUrl("/products");
    }
  }
}
