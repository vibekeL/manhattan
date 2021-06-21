import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Slot } from '../slot.model';
import { SlotService } from '../slot.service';
import { MatSelectChange } from '@angular/material/select';
import { ConfirmDialogComponent } from '../confirm-dialog';
import { ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Slot>;

  dataSource = new MatTableDataSource<Slot>();
  versions = ['Kgs.', 'Dronning L'];
  displayedColumns = ['id', 'name', 'location', 'group'];
  slots: Slot[];
  selectedValue: string;
  constructor(private slotService: SlotService, public dialog: MatDialog) {}
  ngOnInit() {
    this.getSlots();
  }
  confirmDialog(action: string) {
    const dialogData = new ConfirmDialogModel(action, 'Do stuff or press no to close again ?');
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      position: { right: '0', top: '0' },
      height: '100%',
      width: '185px',
      hasBackdrop: false,
      panelClass: ['animate__animated', 'animate__bounceInRight'],
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.doStuff(dialogResult);
      }
    });
  }
  doStuff(dialogResult: any) {
    // TODO pupose console.log() tos see result should be remove for prod
    console.log('do Stuff result was: ', dialogResult);
  }
  getSlots(): void {
    this.slotService.getSlots().subscribe((slots: Slot[]) => {
      this.dataSource.data = slots;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event) {
    let filterValue = 'NA';
    const isSelector = event instanceof MatSelectChange ? 1 : 0;
    switch (isSelector) {
      case 0: {
        filterValue = (event.target as HTMLInputElement).value;
        break;
      }
      case 1: {
        filterValue = event instanceof MatSelectChange ? event.value : '';
        break;
      }
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
