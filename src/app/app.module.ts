import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './pages/feed/feed.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { CreateComponent } from './components/common/icons/create/create.component';
import { ExploreIconComponent } from './components/common/icons/explore-icon/explore-icon.component';
import { HomeIconComponent } from './components/common/icons/home-icon/home-icon.component';
import { ExploreComponent } from './pages/explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SidebarComponent,
    CreateComponent,
    ExploreIconComponent,
    HomeIconComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
