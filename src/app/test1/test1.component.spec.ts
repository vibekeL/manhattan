import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';

import { Test1Component } from './test1.component';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;
 let dialog: MatDialog;
 const mockMatDialog = {
   open: (comp: any) => ({
     subscribe: () => ({}),
   }),
   afterClosed: () => of(true),
 };
 const dialogMock = {
   close: () => {},
 };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test1Component],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
