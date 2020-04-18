import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  goals = [
    {
      id: 12,
      name: 'Погулять',
      description: 'надо погулять с собокой',
      importance: 'normal',
      created: new Date(),
      deadline: new Date(),
      completed: true
    },
    {
      id: 15,
      name: 'Приготовить',
      description: 'покушать на ужин надо сделать',
      importance: 'important',
      created: new Date(),
      deadline: new Date(),
      completed: true
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
