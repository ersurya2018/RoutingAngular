import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {name:"Anil",email:"Anil@gmail.com",age:18},
      {name:"harry",email:"harry@gmail.com",age:28},
      {name:"Ai",email:"Ai@gmail.com",age:18},
      {name:"Amara",email:"Amara@gmail.com",age:18}
    ]
  }
}
