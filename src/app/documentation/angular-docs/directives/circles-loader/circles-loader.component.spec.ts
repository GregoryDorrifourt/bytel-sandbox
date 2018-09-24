import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesLoaderComponent } from './circles-loader.component';

describe('CirclesLoaderComponent', () => {
  let component: CirclesLoaderComponent;
  let fixture: ComponentFixture<CirclesLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclesLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
