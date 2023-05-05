import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {
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
    this.router.navigate(['/win'], {relativeTo: this.activeRoute});

  }
}
