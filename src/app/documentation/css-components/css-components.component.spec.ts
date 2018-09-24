import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComponentsComponent } from './css-components.component';

describe('CssComponentsComponent', () => {
  let component: CssComponentsComponent;
  let fixture: ComponentFixture<CssComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
