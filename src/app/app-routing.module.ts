import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EndComponent } from './end/end.component';
import { LoseComponent } from './lose/lose.component';
import { NetherComponent } from './nether/nether.component';
import { OverworldComponent } from './overworld/overworld.component';
import { ScoreComponent } from './score/score.component';
import { WinComponent } from './win/win.component';


const routes: Routes = [
  {path:"", component:AboutComponent},
  {path:"end", component:EndComponent},
  {path:"lose", component:LoseComponent},
  {path:"nether", component:NetherComponent},
  {path:"overworld", component:OverworldComponent},
  {path:"score", component:ScoreComponent},
  {path:"win", component:WinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
