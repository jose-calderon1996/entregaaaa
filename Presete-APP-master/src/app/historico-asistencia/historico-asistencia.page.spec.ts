import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoAsistenciaPage } from './historico-asistencia.page';

describe('HistoricoAsistenciaPage', () => {
  let component: HistoricoAsistenciaPage;
  let fixture: ComponentFixture<HistoricoAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
