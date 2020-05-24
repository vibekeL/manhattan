import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SlotService } from '../slot.service';
import { Slot } from '../slot.model';
@Component({
  selector: 'app-slot-detail',
  templateUrl: './slot-detail.component.html',
  styleUrls: ['./slot-detail.component.scss'],
})
export class SlotDetailComponent implements OnInit {
  @Input() slot: Slot;

  constructor(
    private route: ActivatedRoute,
    private slotService: SlotService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getSlot();
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.slotService.updateHero(this.slot).subscribe(() => this.goBack());
  }
  getSlot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.slotService.getSlot(id).subscribe((slot) => (this.slot = slot));
  }
}