import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  timeLeft: number = 60;
  interval: any;
  subscribeTimer: any;
  ints : number = 1000;
  stopped: boolean = false;

  constructor(private router: Router, private activeRoute : ActivatedRoute) {}

    ngOnInit()
    {
      this.startTimer();
    }

    oberserableTimer() {
      const source = timer(1000, 2000);
      const abc = source.subscribe(val => {
        console.log(val, '-');
        this.subscribeTimer = this.timeLeft - val;
      });
    }
  
    startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else if(!this.stopped) {
          this.pauseTimer;
          this.ints = 1000000000;
          this.stopped = true;
          this.router.navigate(['/lose'], {relativeTo: this.activeRoute});  
        }
      },this.ints)
    }
  
    pauseTimer() {
      clearInterval(this.interval);
    }

    setTimeLeft(tl : number) {
      this.timeLeft = tl;
    }

  }

