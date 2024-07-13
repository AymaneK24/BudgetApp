import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismesPageComponent } from './organismes-page.component';

describe('OrganismesPageComponent', () => {
  let component: OrganismesPageComponent;
  let fixture: ComponentFixture<OrganismesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
