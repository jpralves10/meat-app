import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http/src/request";
import { HttpHandler } from "@angular/common/http/src/backend";
import { Observable } from "rxjs";
import { HttpEvent } from "@angular/common/http/src/response";
import { Injectable } from "@angular/core";
import { Injector } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private injector: Injector){}

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        const serviceLogin = this.injector.get(LoginService)
        if(serviceLogin.isLoggedIn()){
            const authRequest = request.clone(
                {setHeaders:{'Authorization': `Bearer ${serviceLogin.user.accessToken}`}}
            )
            return next.handle(authRequest)
        }else{
            return next.handle(request)
        }
    }
}