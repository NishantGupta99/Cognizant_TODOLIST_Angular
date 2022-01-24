import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  viewMode = "default";

  title = 'Enter the Details';
  EmpData = {
    department: 'Development',
    Exp: 5,
  };

  courses =[4,3,2];
  products = [
    {id:1,name: "product1"},
    {id:2,name: "product2"},
    {id:3,name: "product2"},
  ]

  constructor() {}

  ngOnInit(): void {}
}
