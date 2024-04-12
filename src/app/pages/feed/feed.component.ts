import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
    UserInfoComponent
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

}
