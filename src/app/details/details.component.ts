import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe(
      (d)=>{
        console.log(d);
      }
    )
  }

}
