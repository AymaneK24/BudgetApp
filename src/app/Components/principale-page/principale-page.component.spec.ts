import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalePageComponent } from './principale-page.component';

describe('PrincipalePageComponent', () => {
  let component: PrincipalePageComponent;
  let fixture: ComponentFixture<PrincipalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
