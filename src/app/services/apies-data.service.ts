import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiesDataService {

  url="http://localhost:3000/user";
  addrressUrl="http://localhost:3000/Address";

  constructor(private http:HttpClient) { }


  userdata()
  {
    return this.http.get(this.url);
  }

  savedata(data:any)
  {
    return this.http.post(this.url,data);
  }

  showAddress()
  {
    return this.http.get(this.addrressUrl)
  }
//here we write the code for save address data by api
  saveAddress(data:any)
  {
    return this.http.post(this.addrressUrl,data)
  }
}
