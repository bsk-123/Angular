import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userDetails=[
    {
      name:'ABCD',
      address: 'HYD'
    },{
      name: 'DEF',
      address:'BAN'
    },{
      name:'GHI',
      address:'GFG'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
