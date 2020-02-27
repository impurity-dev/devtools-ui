import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-devtools-ui',
  template: `
    <button class="btn btn-primary">Bootstrap</button>
    <p>
      devtools-ui works!
    </p>
  `,
  styles: []
})
export class DevtoolsUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
