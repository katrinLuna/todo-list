import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatingGoalComponent } from './components/creating-goal/creating-goal.component';
import { EditGoalComponent } from './components/edit-goal/edit-goal.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';


const routes: Routes = [
  { path: '', component: GoalListComponent },
  { path: 'add-goal', component: CreatingGoalComponent },
  {path: 'edit-goal/:id', component: EditGoalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
