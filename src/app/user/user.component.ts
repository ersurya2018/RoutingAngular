import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private routre:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn("user id is ", this.routre.snapshot.paramMap.get("id"));
    
  }

}
