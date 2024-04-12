import { Component } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  posts: any[] = [
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet', image: 'https://scontent.cdninstagram.com/v/t39.30808-6/430848778_18424475371057803_4406035504656717473_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=iX-W8TXBMAAAX_IA5in&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMxOTE1ODAwODQxODk2NDQzNw%3D%3D.2-ccb7-5&oh=00_AfAEi2DSRZadLXeBuRiBeO4K0m9F1rW6R3EOx1O6tZ8hMg&oe=65F13CCC&_nc_sid=10d13b' },
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
