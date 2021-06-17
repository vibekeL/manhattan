import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { of } from 'rxjs';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let dialog: MatDialog;
  const mockMatDialog = {
    open: (comp: any) => ({
      subscribe: () => ({})
    }),
    afterClosed: () => of(true)
  };
  const dialogMock = {
    close: () => {}
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ConfirmDialogComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });
  it('onDismiss', () => {
    spyOn(component.dialogRef, 'close');
    component.onDismiss();
    return expect(component.dialogRef.close).toHaveBeenCalled();
  });
  it('onConfirm', () => {
    spyOn(component.dialogRef, 'close');
    component.onConfirm();
    return expect(component.dialogRef.close).toHaveBeenCalled();
  });
  it('should create', () => {
    return expect(component).toBeTruthy();
  });
});
