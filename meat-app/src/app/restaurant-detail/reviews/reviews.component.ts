import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {trigger, state, style, transition, animate} from '@angular/animations'

import {RestaurantsService} from '../../restaurants/restaurants.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  animations: [
    trigger('reviewsAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {

  reviewsState = 'ready'

  reviews: Observable<any>

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
        .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }
}
