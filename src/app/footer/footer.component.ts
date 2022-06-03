import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Emaildata:any;
  constructor(private emaildata:UserdataService) {
    console.warn("Emaildata",emaildata.users());
    this.Emaildata=emaildata.users();
   }

  ngOnInit(): void {
  }

}
