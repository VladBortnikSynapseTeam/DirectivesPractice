import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowArticleCheckedComponent } from './show-article-checked.component';

describe('ShowArticleCheckedComponent', () => {
  let component: ShowArticleCheckedComponent;
  let fixture: ComponentFixture<ShowArticleCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowArticleCheckedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowArticleCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
