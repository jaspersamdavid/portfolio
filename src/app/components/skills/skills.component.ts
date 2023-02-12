import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = ['Proficient in Python, Java, Angular Framework, HTML, CSS, Object- Oriented programming skills and Data Structures',
  'Relational Database modelling, SQL, PL/SQL, MySQL, Oracle, PostgreSQL, SQL Server',
  'Relational Database modelling, SQL, PL/SQL, MySQL, Oracle, PostgreSQL, SQL Server',
  'Relational Database modelling, SQL, PL/SQL, MySQL, Oracle, PostgreSQL, SQL Server',
  'Relational Database modelling, SQL, PL/SQL, MySQL, Oracle, PostgreSQL, SQL Server',
  'Relational Database modelling, SQL, PL/SQL, MySQL, Oracle, PostgreSQL, SQL Server'
];

skillprogress = [{
  name:"Frontend",
  percent:"90%",
  value:"height:24px;width:90%"
},
{
  name:"Backend",
  percent:"75%",
  value:"height:24px;width:75%"
},
{
  name:"Database",
  percent:"80%",
  value:"height:24px;width:80%"
},
{
  name:"Devops",
  percent:"60%",
  value:"height:24px;width:60%"
}
];
  

  constructor() { }

  ngOnInit(): void {
  }


}
