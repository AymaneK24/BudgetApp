import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbdoforgPageComponent } from './gbdoforg-page.component';

describe('GbdoforgPageComponent', () => {
  let component: GbdoforgPageComponent;
  let fixture: ComponentFixture<GbdoforgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbdoforgPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbdoforgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
