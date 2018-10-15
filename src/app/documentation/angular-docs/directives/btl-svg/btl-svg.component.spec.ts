import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtlSvgComponent } from './btl-svg.component';

describe('BtlSvgComponent', () => {
  let component: BtlSvgComponent;
  let fixture: ComponentFixture<BtlSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtlSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtlSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
