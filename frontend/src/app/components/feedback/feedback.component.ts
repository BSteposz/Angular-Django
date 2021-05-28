import { Component, OnInit } from '@angular/core';
import {FrontendService} from "../../services/frontend.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = [{name:'test', feedback:'test', created:0}];
  feedbacks = {id: -1, name:'' , feedback: '', created:0}

  constructor(private frontendService: FrontendService) {
    this.getFeedback();
    this.feedbacks = {id: -1, name:'' , feedback: '', created:0}
  }

  ngOnInit(): void {
  }
  getFeedback () {
    this.frontendService.getAllFeedback().subscribe(
      data => {
        this.feedback = data;
      },
      error => {
        console.log(error)
      }
    )
  };

  createFeedback () {
    this.frontendService.createFeedback(this.feedbacks).subscribe(
      data => {
        this.feedback.push(data);
      },
      error => {
        console.log(error)
      }
    )
  }


}
