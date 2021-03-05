import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EditItemComponent } from './edit-item.component';

const serviceStub = {
  all: () => {
    return {
      subscribe: () => { }
    }
  }
}

describe('EditItemComponent', () => {
  let component: EditItemComponent;
  let fixture: ComponentFixture<EditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditItemComponent],
      providers: [DynamicDialogRef, DynamicDialogConfig, { useValue: serviceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
