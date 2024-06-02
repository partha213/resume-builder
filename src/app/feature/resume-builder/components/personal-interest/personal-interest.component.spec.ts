import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInterestComponent } from './personal-interest.component';

describe('PersonalInterestComponent', () => {
  let component: PersonalInterestComponent;
  let fixture: ComponentFixture<PersonalInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
