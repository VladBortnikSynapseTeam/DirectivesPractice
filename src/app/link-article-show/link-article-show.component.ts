import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-article-show',
  templateUrl: './link-article-show.component.html',
  styleUrls: ['./link-article-show.component.css']
})
export class LinkArticleShowComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(isShown:boolean):void{
    this.show = isShown;
  }
}
