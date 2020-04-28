import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creating-goal',
  templateUrl: './creating-goal.component.html',
  styleUrls: ['./creating-goal.component.scss']
})
export class CreatingGoalComponent implements OnInit {
  form = {
    id: '',
    name: '',
    description: '',
    importance: '',
    date: '',
  }
  // id надо вычислять исходя из числа элементов в локал сторедж если они есть

  // добавть валидацию формы при нажатии на кнопку - что поля заполнены

  // на кнопке надо запускать отправку формы - тут функцию добавить и через сервис добавлять в локалсторедж

  constructor() { }

  ngOnInit(): void {
  }

}
