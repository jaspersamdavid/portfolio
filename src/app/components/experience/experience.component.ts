
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "core-js/stable";
import "regenerator-runtime/runtime"; 


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit {

  jobs = [{
    status: false,
    company: "Tata Consultancy Services",
    title:"Web Developer",
    desc:`<p> joined TCS</p>`
  },
  {
    status: true,
    company: "DEVJee Inc",
    title:"Web Developer",
    desc:`<p> joined TCS</p>`
  }
];

  constructor() { }

  ngOnInit() { 
  }

}
