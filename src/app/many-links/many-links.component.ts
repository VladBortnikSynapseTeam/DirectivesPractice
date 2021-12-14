import { Component, OnInit } from '@angular/core';

export interface Article{
  id: number;
  title:string;
  isHide: boolean;
}

@Component({
  selector: 'app-many-links',
  templateUrl: './many-links.component.html',
  styleUrls: ['./many-links.component.css']
})
export class ManyLinksComponent implements OnInit {
  articles: Article[] = [
    {id:0, title:"ABCABCABCABCABC", isHide: false},
    {id:1, title:"ZXCZXCZXCZXCZXC", isHide: false},
    {id:2, title:"QWEQWEQWEQWEQWE", isHide: false},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  hideArticle(id:number){
    this.articles.forEach((article)=>{
      if(article.id == id){
        article.isHide = !article.isHide;
      }
    })
  }
}
