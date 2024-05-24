import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgFlexPracticeComponent } from './prime-ng-flex-practice.component';

describe('PrimeNgFlexPracticeComponent', () => {
  let component: PrimeNgFlexPracticeComponent;
  let fixture: ComponentFixture<PrimeNgFlexPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeNgFlexPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeNgFlexPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
