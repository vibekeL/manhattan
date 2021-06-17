import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
 constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  dialogRef: MatDialogRef<any>;
  openDialog() {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      position: { right: "0", top: "0" },
      height: "100%",
      width: "160px",
      hasBackdrop: false,
      panelClass: ["animate__animated", "animate__bounceInRight"],
      data: { onClose: () => this.close() }
    });

    this.dialogRef.afterOpened().subscribe(result => {
      //this.dialogRef.removePanelClass("animate__bounceInRight");
      console.log("after openeed");
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  close() {
    console.log("test 2 close");
    this.dialogRef.addPanelClass("animate__bounceOutRight");
  }

}
