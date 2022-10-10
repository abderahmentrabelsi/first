import { Component, OnInit } from '@angular/core';
import { fournisseur } from 'src/app/model/Fournisseur';
import { FournisseurComponent } from '../fournisseur/fournisseur.component';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent implements OnInit {
  list :fournisseur[] = [
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
