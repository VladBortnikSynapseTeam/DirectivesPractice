import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLinkArticleShowComponent } from './one-link-article-show.component';

describe('OneLinkArticleShowComponent', () => {
  let component: OneLinkArticleShowComponent;
  let fixture: ComponentFixture<OneLinkArticleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLinkArticleShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLinkArticleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
