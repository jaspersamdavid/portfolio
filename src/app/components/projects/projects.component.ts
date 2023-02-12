
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "core-js/stable";
import "regenerator-runtime/runtime"; 


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {

  projects = [{
    liveUrl:"https//www.google.com",
    gitUrl:"www.github.com",
    title:"software",
    desc:"Example",
    tech: ["Angular", "Python"]
  },
  {
    liveUrl:"https//www.google.com",
    gitUrl:"www.github.com",
    title:"software",
    desc:"Example",
    tech: ["Angular", "Python"]
  },
  {
    liveUrl:"https//www.google.com",
    gitUrl:"www.github.com",
    title:"software",
    desc:"Example",
    tech: ["Angular", "Python"]
  }
  ]

  constructor() { }

  ngOnInit() { 
  
  }

}
