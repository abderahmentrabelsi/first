import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListUserComponent } from './list-user/list-user.component';
import { FournisseurComponent } from './Atelier2/fournisseur/fournisseur.component';
import { ListFournisseurComponentComponent } from './Atelier2/list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitsComponent } from './Atelier2/list-produits/list-produits.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { RemoveProduitComponent } from './Produit/remove-produit/remove-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { ShowProduitComponent } from './Produit/show-produit/show-produit.component';
import { DetailProduitComponent } from './Produit/detail-produit/detail-produit.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { Atelier3Component } from './atelier3/atelier3.component';
import { MainInvoiceComponentComponent } from './Atelier3/main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './Atelier3/invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './Atelier3/invoice-component/invoice-component.component';
import { HeaderComponent } from './Shared/header/header.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ListUserComponent,
    FournisseurComponent,
    ListFournisseurComponentComponent,
    ListProduitsComponent,
    AddProduitComponent,
    RemoveProduitComponent,
    UpdateProduitComponent,
    ShowProduitComponent,
    DetailProduitComponent,
    NavComponent,
    NotfoundComponent,
    LoginComponent,
    Atelier3Component,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
