import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, SafeHtmlPipe } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackendApiService } from './services/backend-api.service';
import { NgUploaderModule } from 'ngx-uploader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SafeHtmlPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    NgUploaderModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
