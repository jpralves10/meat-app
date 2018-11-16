import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, Validator, AbstractControl, FormControl} from '@angular/forms'
import {Router} from '@angular/router'
import {tap} from 'rxjs/operators'

import {OrderService} from './order.service'
import {RadioOption} from '../shared/radio/radio-option.model'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  delivery: number = 8

  orderId: string

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name: new FormControl ('', {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      email: new FormControl ('', {
        validators: [Validators.required, Validators.pattern(this.emailPattern)]
      }),
      emailConfirmation: new FormControl ('', {
        validators: [Validators.required, Validators.pattern(this.emailPattern)]
      }),
      address: new FormControl ('', {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      number: new FormControl ('', {
        validators: [Validators.required, Validators.pattern(this.numberPattern)]
      }),
      optionalAddress: new FormControl ('', {
        //
      }),
      paymentOptions: new FormControl ('', {
        validators: [Validators.required]
      }),
    }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  removeItem(item: CartItem){
    this.orderService.removeItem(item)
  }

  isOrderCompleted():boolean{
    return this.orderId != undefined
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
        .map((item: CartItem) => new OrderItem(item.menuItem.id, item.quantity))

    this.orderService.checkOrder(order)
    .pipe(
      tap((orderId:string) => {this.orderId = orderId })
    )
    .subscribe((orderId: string) => {
      this.router.navigate(['/order/order-summary'])
      this.orderService.clear()
    })
  }
}