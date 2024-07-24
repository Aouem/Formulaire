import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregistryComponent } from './listregistry.component';

describe('ListregistryComponent', () => {
  let component: ListregistryComponent;
  let fixture: ComponentFixture<ListregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListregistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
