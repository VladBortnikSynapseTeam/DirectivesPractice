import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-article-checked',
  templateUrl: './show-article-checked.component.html',
  styleUrls: ['./show-article-checked.component.css']
})
export class ShowArticleCheckedComponent implements OnInit {
  checked = true;
  constructor() { }

  ngOnInit(): void {
  }
  toogle():void{
    this.checked = !this.checked;
  }
}
