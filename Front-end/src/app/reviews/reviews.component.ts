import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  
  provedores = [];


  constructor(
    private service: ReviewsService
  ) { }

  ngOnInit() {
    this.carregar();
  }

  carregar(){
   
    this.service.pesquisar()
    .then((dados)=>{
      this.provedores = dados;
    });    
  }

}
