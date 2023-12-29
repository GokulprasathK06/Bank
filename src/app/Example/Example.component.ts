import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Example',
  templateUrl: './Example.component.html',
  styleUrls: ['./Example.component.css']
})
export class ExampleComponent implements OnInit {
  message: string = 'Hello World';
  isHighlighted: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  constructor() { }

  ngOnInit() {
  }

}
