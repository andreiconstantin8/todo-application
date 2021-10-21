import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos?: Todo[];
  inputTodo: string = "";

  constructor() { }
  refresh(): void {
    window.location.reload();
}
  ngOnInit(): void {
    this.todos = [
    ]
  }
  toggleDone(id: number) {
    // @ts-ignore
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  // delete todo
  deleteTodo(id: number) {
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  //add todo
  addTodo() {
    if (this.inputTodo) {
      // @ts-ignore
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
    }
    
    else {
      alert("not allowed empty todo");

    }
    this.inputTodo = "";
  }
}
