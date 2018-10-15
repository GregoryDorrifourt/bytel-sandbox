import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCodeGeneratorComponent } from './template-code-generator.component';

describe('TemplateCodeGeneratorComponent', () => {
  let component: TemplateCodeGeneratorComponent;
  let fixture: ComponentFixture<TemplateCodeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCodeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
