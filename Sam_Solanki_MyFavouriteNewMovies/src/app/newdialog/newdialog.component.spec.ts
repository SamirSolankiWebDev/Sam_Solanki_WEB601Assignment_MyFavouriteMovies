import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdialogComponent } from './newdialog.component';

describe('NewdialogComponent', () => {
  let component: NewdialogComponent;
  let fixture: ComponentFixture<NewdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
