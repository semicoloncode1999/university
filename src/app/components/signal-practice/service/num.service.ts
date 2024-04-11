import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumService {

  constructor() { }

  number=signal(0);

  arr=signal([{id:1,name:"medo"},{id:2,name:"Ahmed"},])
}
