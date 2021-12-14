import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyLinksComponent } from './many-links.component';

describe('ManyLinksComponent', () => {
  let component: ManyLinksComponent;
  let fixture: ComponentFixture<ManyLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
