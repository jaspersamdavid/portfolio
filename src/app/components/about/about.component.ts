
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "core-js/stable";
import "regenerator-runtime/runtime";



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  about = [{
    desc: ` <p><i class="fa fa-quote-left" style="font-size:48px;color:white"></i> The name is Jasper Sam David and I am a proud Software Developer.
    <br>
    Onward with a passion for technology and a drive to create impactful solutions, I have honed my skills as a full-stack developer through working with product-focused companies. My experience has taught me to approach projects with a user-centered mindset, consistently striving to create efficient and intuitive experiences.
    <br>
    Drawing on my diverse skill set and my commitment to delivering exceptional results, I am eager to bring my passion for creating meaningful products to a new professional challenge. Whether working in a team or individually, I am always striving to improve my craft and make a positive impact.
    <i class="fa fa-quote-right" style="font-size:48px;color:white"></p>`
  }
];

  constructor() { }

  ngOnInit(): void {
  }


}

