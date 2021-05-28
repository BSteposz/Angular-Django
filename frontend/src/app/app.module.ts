import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ImageComponent } from './components/image/image.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PollsComponent } from './components/polls/polls.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ImageComponent,
    PollsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
