import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {OrderComponent} from './order.component'
import {OrderItemsComponent} from './order-items/order-items.component'
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes = [
  {path: '', component: OrderComponent, canDeactivate:[LeaveOrderGuard]},
  {path: 'order-summary', component: OrderSummaryComponent}
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OrderModule {}
