import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderResumeComponent } from './render-resume.component';

describe('RenderResumeComponent', () => {
  let component: RenderResumeComponent;
  let fixture: ComponentFixture<RenderResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
