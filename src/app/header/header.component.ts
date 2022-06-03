import { Component, OnInit } from '@angular/core';
// import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  ngOnInit(): void {
  }
  // users:any;
  // constructor(private userdata:UserdataService)
  // {
  //   console.warn("userData",userdata.users());
  //   this.users=userdata.users();
  // }

}
