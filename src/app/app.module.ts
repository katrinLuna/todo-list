import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreatingGoalComponent } from './components/creating-goal/creating-goal.component';
import { EditGoalComponent } from './components/edit-goal/edit-goal.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatingGoalComponent,
    EditGoalComponent,
    GoalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
