import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KriptovalutaListaComponent } from './kriptovaluta-lista.component';

describe('KriptovalutaListaComponent', () => {
  let component: KriptovalutaListaComponent;
  let fixture: ComponentFixture<KriptovalutaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KriptovalutaListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KriptovalutaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
