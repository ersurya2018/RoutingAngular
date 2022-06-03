import { Component } from '@angular/core';
// import { UserdataService } from './services/userdata.service';
import { ApiesDataService } from './services/apies-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingBlog';
  // users:any;
  // constructor(private userdata:UserdataService)
  // {
  //   console.warn("userData",userdata.users());
  //   this.users=userdata.users();
  // }


  //here we write the code show data 
  datauser:any;
  dataaddreess:any;
  constructor(private users:ApiesDataService,private addressdata:ApiesDataService)
  {
    //here we write the code for show user data by the api
    this.users.userdata().subscribe((data)=>{
      //console.warn("data",data);
      
      this.datauser=data
    })
    //here we write the code for show address data by the api
    this.addressdata.showAddress().subscribe((data)=>{
      console.warn("address data",data);
      this.dataaddreess=data;
    })
  }
//here we write the code for save data in api
  getuserdata(data:any)
  {
    //console.warn(data); 
    this.users.savedata(data).subscribe((responce)=>
    {
      window.parent.location.reload();
    })
  }
  getaddress(add_data:any)
  {
    this.addressdata.saveAddress(add_data).subscribe((success)=>
    {
      console.warn(success);
      
    });
  }
  //here we show the data
  // constructor(private addressdata:ApiesDataService)
  // {
  //   this.addressdata.showAddress().subscribe((data)=>{
  //     console.warn(data);
  //   })
  // }
  
}
