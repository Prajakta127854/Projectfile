import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdFormComponent } from './prod-form-20220408T134755Z-001/prod-form/prod-form.component';
import { ProdListComponent } from './prod-list-20220408T134811Z-001/prod-list/prod-list.component';
import { WelcomeComponent } from './welcome-20220408T134833Z-001/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[{path:'',component:WelcomeComponent},{path:'products',component:ProdListComponent},
{path:'prodform',component:ProdFormComponent}
,{path:'updateProd/:fbproductid',component:ProdFormComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
