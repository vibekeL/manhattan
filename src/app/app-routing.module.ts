import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';
import { SlotDetailComponent } from './slot-detail/slot-detail.component';
import { TestTableComponent } from './test-table/test-table.component';


const routes: Routes = [
  { path: '', redirectTo: '/slots', pathMatch: 'full' },
  { path: 'slots', component: SlotsComponent },
  { path: 'temp', component: TestTableComponent },
  { path: 'detail/:id', component: SlotDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
