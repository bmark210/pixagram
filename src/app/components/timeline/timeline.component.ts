import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  posts: any[] = [
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet' },
    { title: 'Post 2', content: 'Consectetur adipiscing elit' },
    { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt' },
    { title: 'Post 4', content: 'Ut labore et dolore magna aliqua' },
    { title: 'Post 5', content: 'Ut enim ad minim veniam' },
    { title: 'Post 6', content: 'Quis nostrud exercitation ullamco' },
    {
      title: 'Post 7',
      content: 'Laboris nisi ut aliquip ex ea commodo consequat',
    },
    { title: 'Post 8', content: 'Duis aute irure dolor in reprehenderit' },
    { title: 'Post 9', content: 'Voluptate velit esse cillum dolore' },
    { title: 'Post 10', content: 'Eu fugiat nulla pariatur' },
  ];
}
