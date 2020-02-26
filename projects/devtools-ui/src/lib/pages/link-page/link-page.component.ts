import { Link } from './../../models/link.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'devtools-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent {
  @Input() links: Link[] = [];
}
