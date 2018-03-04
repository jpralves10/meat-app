import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './shared/messages/notification.service';
import { LoginService } from './security/login/login.service';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {

  constructor(
    private sNotification: NotificationService,
    private injector: Injector,
    private zone: NgZone
  ){
    super()
  }

  handleError(errorResponse: HttpErrorResponse | any){
    if(errorResponse instanceof HttpErrorResponse){
      const message = errorResponse.error.message

      this.zone.run(() => {
        if(errorResponse.status === 401){
          this.injector.get(LoginService).handleLogin();
        }
        if(errorResponse.status === 403){
          this.sNotification.notify(message || 'Não autorizado!')
        }
        if(errorResponse.status === 404){
          this.sNotification.notify(message || 'Recurso não encontrado!')
        }
      })
    }
    super.handleError(errorResponse)
  }
}