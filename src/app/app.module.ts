import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ShowArticleCheckedComponent } from './show-article-checked/show-article-checked.component';
import { LinkArticleShowComponent } from './link-article-show/link-article-show.component';
import { OneLinkArticleShowComponent } from './one-link-article-show/one-link-article-show.component';
import { ManyLinksComponent } from './many-links/many-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowArticleComponent,
    ShowArticleCheckedComponent,
    LinkArticleShowComponent,
    OneLinkArticleShowComponent,
    ManyLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
