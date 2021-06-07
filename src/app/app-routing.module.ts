import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';
import { SlotDetailComponent } from './slot-detail/slot-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/slots', pathMatch: 'full' },
  { path: 'slots', component: SlotsComponent },
  { path: 'detail/:id', component: SlotDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
