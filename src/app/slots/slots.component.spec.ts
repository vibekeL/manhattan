import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SlotsComponent } from "./slots.component";
import { SlotService } from "../slot.service";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { of } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatTableDataSource } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessageService } from "../messages.service";

describe("SlotsComponent", () => {
  let component: SlotsComponent;
  let fixture: ComponentFixture<SlotsComponent>;
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
      declarations: [SlotsComponent],
      imports: [
        MatTableModule,
        MatDialogModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(SlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
