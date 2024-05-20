import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
// change country with code 
  private newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=b783ef6a78394674b84197f003fd24a1';
private techUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b783ef6a78394674b84197f003fd24a1"
  constructor(private http: HttpClient) { }
// topheading news 
  topHeading(): Observable<any> {
    return this.http.get<any>(this.newsApiUrl);
  }
// technews
  technews(): Observable<any> {
    return this.http.get<any>(this.techUrl);
  }
  // add different types of news
}
