import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoforganismePageComponent } from './formoforganisme-page.component';

describe('FormoforganismePageComponent', () => {
  let component: FormoforganismePageComponent;
  let fixture: ComponentFixture<FormoforganismePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormoforganismePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormoforganismePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
