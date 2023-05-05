import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nether',
  templateUrl: './nether.component.html',
  styleUrls: ['./nether.component.css']
})
export class NetherComponent {
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
    this.router.navigate(['/end'], {relativeTo: this.activeRoute});

  }
}
