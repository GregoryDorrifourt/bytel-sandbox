import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleDemoComponent } from './page-title-demo.component';

describe('PageTitleDemoComponent', () => {
  let component: PageTitleDemoComponent;
  let fixture: ComponentFixture<PageTitleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
