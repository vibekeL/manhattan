import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SlotService } from '../slot.service';
import { Slot } from '../slot.model';
import { ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.model';
import { ConfirmDialogComponent } from '../confirm-dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-slot-detail',
  templateUrl: './slot-detail.component.html',
  styleUrls: ['./slot-detail.component.scss'],
})
export class SlotDetailComponent implements OnInit {
  @Input() slot: Slot;
  editing: any;

  constructor(
    private route: ActivatedRoute,
    private slotService: SlotService,
    private location: Location,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.getSlot();
  }
  goBack(): void {
    this.location.back();
  }
 confirmDialog(action: string) {
   console.log('in confirmDialog()', action)
    const dialogData = new ConfirmDialogModel(action, 'Warning');
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '300px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult ) {
        this.editing = dialogResult;
        this.save();
      }
    });
  }

  save(): void {
    this.slotService.updateSlot(this.slot).subscribe(() => this.goBack());
  }
  getSlot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.slotService.getSlot(id).subscribe((slot) => (this.slot = slot));
  }
}
