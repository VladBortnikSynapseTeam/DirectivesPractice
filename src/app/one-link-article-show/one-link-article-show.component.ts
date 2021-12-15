import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-link-article-show',
  templateUrl: './one-link-article-show.component.html',
  styleUrls: ['./one-link-article-show.component.css']
})
export class OneLinkArticleShowComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle():void{
    this.show = !this.show;
  }
}
