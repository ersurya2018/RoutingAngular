import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Huser:any;
  constructor(private userdata:UserdataService) { 
    console.warn("HomeData",userdata.users());
    this.Huser=userdata.users();
  }

  ngOnInit(): void {
  }

}
