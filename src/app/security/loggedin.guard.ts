
import {CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private serviceLogin: LoginService){}

    checkAuthentication(path:string):boolean{
        const loggedIn = this.serviceLogin.isLoggedIn()
        if(!loggedIn){
            this.serviceLogin.handleLogin(`/${path}`)
        }
        return loggedIn
    }

    canLoad(route:Route): boolean {
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot):boolean {
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }
}