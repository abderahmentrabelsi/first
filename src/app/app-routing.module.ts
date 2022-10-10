import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponentComponent } from './Atelier3/invoice-component/invoice-component.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { DetailProduitComponent } from './Produit/detail-produit/detail-produit.component';
import { RemoveProduitComponent } from './Produit/remove-produit/remove-produit.component';
import { ShowProduitComponent } from './Produit/show-produit/show-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full',},
  {path:'login',component:LoginComponent},
  {path:'details/:id/:active',component:DetailsComponent},

{path:'invoice',component:InvoiceComponentComponent},
{path:'Product',component:ShowProduitComponent,
children:[
  {path:'add',component:AddProduitComponent},
{path:'remove/:id',component:RemoveProduitComponent},
{path:'update',component:UpdateProduitComponent},

{path:'detail/:id',component:DetailProduitComponent},







]

},


{path:'invoice',component:InvoiceComponentComponent},
{path:'**',component:NotfoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
