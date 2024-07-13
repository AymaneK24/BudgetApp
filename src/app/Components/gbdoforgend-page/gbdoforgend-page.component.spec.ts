import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbdoforgendPageComponent } from './gbdoforgend-page.component';

describe('GbdoforgendPageComponent', () => {
  let component: GbdoforgendPageComponent;
  let fixture: ComponentFixture<GbdoforgendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbdoforgendPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbdoforgendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
