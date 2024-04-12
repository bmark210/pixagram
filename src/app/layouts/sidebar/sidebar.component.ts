import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeIconComponent } from 'src/app/components/common/icons/home-icon/home-icon.component';
import { CreateComponent } from 'src/app/components/common/icons/create/create.component';
import { ExploreComponent } from 'src/app/pages/explore/explore.component';
import { ExploreIconComponent } from 'src/app/components/common/icons/explore-icon/explore-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeIconComponent, CreateComponent, ExploreIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  currentSection: string = "create";
  changeSection(section: string) {
    this.currentSection = section;
  }
}
