import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjKriptovalutaComponent } from './uj-kriptovaluta.component';

describe('UjKriptovalutaComponent', () => {
  let component: UjKriptovalutaComponent;
  let fixture: ComponentFixture<UjKriptovalutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UjKriptovalutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UjKriptovalutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
