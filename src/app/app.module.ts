import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { OverworldComponent } from './overworld/overworld.component';
import { NetherComponent } from './nether/nether.component';
import { EndComponent } from './end/end.component';
import { WinComponent } from './win/win.component';
import { LoseComponent } from './lose/lose.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OverworldComponent,
    NetherComponent,
    EndComponent,
    WinComponent,
    LoseComponent,
    ScoreComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
