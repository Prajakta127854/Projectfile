import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-20220408T134833Z-001/welcome/welcome.component';

import { ProdSearchComponent } from './prod-search-20220408T134822Z-001/prod-search/prod-search.component';
import { ProdFormComponent } from './prod-form-20220408T134755Z-001/prod-form/prod-form.component';
import{ HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list-20220408T134811Z-001/prod-list/prod-list.component';

const routes:Routes=[{path:'',component:WelcomeComponent},{path:'products',component:ProdListComponent},
{path:'prodform',component:ProdFormComponent}
,{path:'updateProd/:fbproductid',component:ProdFormComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProdFormComponent,
    ProdSearchComponent,
    ProdListComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
