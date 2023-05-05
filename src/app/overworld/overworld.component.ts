import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-overworld',
  templateUrl: './overworld.component.html',
  styleUrls: ['./overworld.component.css']
})
export class OverworldComponent {
  question : number = 0;
  answer : String = "";
  timeOn : boolean = true;

  constructor(private router: Router, private activeRoute : ActivatedRoute) {}

  next()
  {
    if(this.question < 6)
    {
      this.question++;
    }
  }

  nextLevel(){
    this.timeOn = false;
    this.router.navigate(['/nether'], {relativeTo: this.activeRoute});

  }
}
