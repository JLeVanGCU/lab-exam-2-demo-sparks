import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInService
{

  public $signedIn = new Subject<boolean>();
  private signedIn = false;
  private signInSubscription = Subscription.EMPTY;

  constructor()
  {
    this.signInSubscription = this.$signedIn.subscribe(
      (signedIn: boolean) =>
      {
        this.signedIn = signedIn;
        console.log('Sign in event in the service', this.signedIn);
      }
    );
  }

  ngOnDestroy()
  {
    this.signInSubscription.unsubscribe();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    console.log('canActivate', this.signedIn);
    return this.signedIn;
  }
}
