import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-produit',
  templateUrl: './remove-produit.component.html',
  styleUrls: ['./remove-produit.component.css']
})
export class RemoveProduitComponent implements OnInit {
id:any;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.ac.snapshot.params['id'];
    //console.log(this.id)
    this.ac.params.subscribe(
      (d)=>{console.log(d);},
      

    )
  }

}
