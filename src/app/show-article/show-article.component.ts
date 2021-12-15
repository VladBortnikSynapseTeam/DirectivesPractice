import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  checked = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle():void{
    this.checked = !this.checked;
  }
}
