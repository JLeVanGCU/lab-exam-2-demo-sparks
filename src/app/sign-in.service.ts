import { Injectable } from '@angular/core';
import  { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  public $signedIn = new Subject<boolean>();

  constructor() { }
}