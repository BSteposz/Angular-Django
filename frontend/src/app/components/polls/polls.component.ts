import { Component, OnInit } from '@angular/core';
import { FrontendService } from "../../services/frontend.service";
@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})

export class PollsComponent implements OnInit {
  questions = [{id:0, question:'test'}];
  choices = [{id:0, question:2, choice:'test', votes:0}];
  choice = {id:0, question:2, choice:'test', votes:0};
  id = 0;
  votes = 0;
  question=0;




  constructor(private frontendService: FrontendService) {
    this.choice = {id:0, question:2, choice:'test', votes:0};
    this.getAllQuestion();
    this.getAllChoices();
  }

  ngOnInit(): void {
  }

  getAllQuestion() {
  this.frontendService.getQuestion().subscribe(
    data => {
      this.questions = data;
    },
    error => {
      console.log(error)
    }
  )
  }

  getAllChoices() {
  this.frontendService.getChoices().subscribe(
    data => {
      this.choices = data;
    },
    error => {
      console.log(error)
    }
  )
  }

  vote (choices:any) {
    this.frontendService.getVote(choices).subscribe(
      data => {
        this.choice
      },
      error => {
        console.log(error)
      }
    )
  }

}
