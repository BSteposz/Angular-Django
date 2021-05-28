import { Component, OnInit } from '@angular/core';
import { FrontendService } from "../../services/frontend.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image = [{title:'test', description:'test', image:'test'}];
  images = {title:'test', description:'test', image: 'File'};


  constructor(private frontendService: FrontendService) {
    this.images = {title:'test', description:'test', image:'test'}
  }

  ngOnInit(): void {
  }



  addImage() {
    this.frontendService.addImage(this.images).subscribe(
      data => {
        this.image.push(data)
      },
      error => {
        console.log(error)
      }
    )

  }
}
