import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {ImageComponent} from "./components/image/image.component";
import {PollsComponent} from "./components/polls/polls.component";

const routes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: 'image', component: ImageComponent },
  { path: 'polls', component: PollsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
