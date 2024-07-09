import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailVoyageComponent } from './datail-voyage.component';

describe('DatailVoyageComponent', () => {
  let component: DatailVoyageComponent;
  let fixture: ComponentFixture<DatailVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
