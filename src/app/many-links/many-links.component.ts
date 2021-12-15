import { Component, OnInit } from '@angular/core';

export interface Article{
  title:string;
  isShown: boolean; 
}

@Component({
  selector: 'app-many-links',
  templateUrl: './many-links.component.html',
  styleUrls: ['./many-links.component.css']
})
export class ManyLinksComponent implements OnInit {
  articles: Article[] = [
  {title:"ABCABCABCABCABC", isShown: true},
  {title:"ZXCZXCZXCZXCZXC", isShown: true},
  {title:"QWEQWEQWEQWEQWE", isShown: true}
]
  constructor() { }

  ngOnInit(): void {
  }
  hideArticle(index:number){
    this.articles[index].isShown = !this.articles[index].isShown;
  }

}
