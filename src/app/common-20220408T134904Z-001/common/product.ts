export class Product {
    constructor
   (
       public fbproductid:number,
        public  fbproductname:string,
        public fbproduct_description:string,
        public unit_price:number,
        public fbproduct_image:string,
        public active:number,
        public date_updated:Date,
        public last_updated:Date,
        public fbcategoryid:number,
        public available_stock:number
        )
        {}
}
