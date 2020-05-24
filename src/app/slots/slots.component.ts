import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Slot } from '../slot.model';
import { SlotService } from '../slot.service';
import { MatSelect, MatSelectChange } from '@angular/material/select';

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
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'location', 'group'];
  slots: Slot[];
  selectedValue: string;
  constructor(private slotService: SlotService) {}
  ngOnInit() {
    this.getSlots();
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
