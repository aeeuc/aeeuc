import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  username:string = ''

  constructor() { }

  public getSession():string{
    return this.username
  }

  public setSession(name:string){
    this.username = name
  }

}
