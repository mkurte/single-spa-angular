import {
  Component,
  VERSION
} from '@angular/core';

@Component({
  selector: 'mf-header-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngVersion = VERSION;

  constructor() { }
}
