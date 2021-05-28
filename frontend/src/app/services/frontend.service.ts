import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {observable, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  baseURL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}


    getAllFeedback(): Observable<any>{
      return this.http.get(this.baseURL + '/feedback/');
    }

    createFeedback(feedback: {id?: number; name:any; feedback?: string, created:any}): Observable<any> {
      const body = {name: feedback.name, feedback: feedback.feedback};
      return this.http.post(this.baseURL + '/feedback/', body)
    }

    addImage(image: {id?: number; title:any; description?: string, image:any}):Observable<any>{
      const body = {title: image.title, description: image.description, image: image.image};
      return this.http.post(this.baseURL + '/image/', body)
    }

    getQuestion(): Observable<any> {
      return this.http.get(this.baseURL + '/polls/question');
    }

    getChoices(): Observable<any> {
      return this.http.get(this.baseURL + '/polls/choices');
    }

    getVote(choice: {id:number, question:number, choice:any, votes:number}): Observable<any>{
        const body = {id:choice.id, question:choice.question, choice: choice.choice, vote: choice.votes}
       return this.http.put(this.baseURL + '/polls/choices', body);
    }

}
