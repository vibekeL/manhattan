import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MessageService } from '../messages.service';
import { SlotService } from '../slot.service';

import { SlotDetailComponent } from './slot-detail.component';

describe('SlotDetailComponent', () => {
  let component: SlotDetailComponent;
  let fixture: ComponentFixture<SlotDetailComponent>;
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
      declarations: [SlotDetailComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        SlotService,
        MessageService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
