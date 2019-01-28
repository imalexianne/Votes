import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetalsComponent } from './quote-detals.component';

describe('QuoteDetalsComponent', () => {
  let component: QuoteDetalsComponent;
  let fixture: ComponentFixture<QuoteDetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
