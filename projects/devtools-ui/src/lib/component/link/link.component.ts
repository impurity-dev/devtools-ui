import { Component, Input } from '@angular/core';

@Component({
  selector: 'devtools-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() url: string;
}
