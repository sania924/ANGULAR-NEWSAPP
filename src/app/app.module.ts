import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiserviceService } from './newsapiservice.service';
import { TechnewsComponent } from './technews/technews.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PrimeNgFlexPracticeComponent } from './prime-ng-flex-practice/prime-ng-flex-practice.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    PrimeNgFlexPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule ,
    LoadingBarHttpClientModule,
    ButtonModule
  ],
  providers: [NewsapiserviceService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
