import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkArticleShowComponent } from './link-article-show.component';

describe('LinkArticleShowComponent', () => {
  let component: LinkArticleShowComponent;
  let fixture: ComponentFixture<LinkArticleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkArticleShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkArticleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
