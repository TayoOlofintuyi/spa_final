import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent {
  constructor(private router: Router, private activeRoute : ActivatedRoute) {}

  toAbout()
  {
    this.router.navigate(['about'], {relativeTo: this.activeRoute});
  }
}
