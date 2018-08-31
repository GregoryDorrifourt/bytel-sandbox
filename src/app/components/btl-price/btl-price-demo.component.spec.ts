import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtlPriceDemoComponent } from './btl-price-demo.component';

describe('BtlPriceDemoComponent', () => {
  let component: BtlPriceDemoComponent;
  let fixture: ComponentFixture<BtlPriceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtlPriceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtlPriceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
