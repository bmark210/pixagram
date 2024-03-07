import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './pages/feed/feed.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { UserInfoComponent } from './layouts/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SidebarComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
