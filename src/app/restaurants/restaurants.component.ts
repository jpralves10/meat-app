import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurants.service'

import {Observable, from} from 'rxjs'

//Operador 'do' foi renomeado para 'tap' na versão 6
import {tap, switchMap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = []

  searchBarState = 'hidden'

  searchForm: FormGroup
  searchControl: FormControl

  constructor(
    private restaurantsService: RestaurantsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
        .pipe(
          debounceTime(650), //Tempo de atraso
          distinctUntilChanged(),
          tap(searchTerm => console.log(`q=${searchTerm}`)),
          switchMap(
            searchTerm => this.restaurantsService.restaurants(searchTerm)
            .pipe(catchError(error => from([])))
          )
        )
        .subscribe(restaurants => this.restaurants = restaurants)

    this.restaurantsService
        .restaurants()
        .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
