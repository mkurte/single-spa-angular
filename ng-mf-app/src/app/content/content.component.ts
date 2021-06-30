import {
  Component,
  VERSION
} from '@angular/core';

@Component({
  selector: 'mf-app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  ngVersion = VERSION;

  constructor() { }
}
