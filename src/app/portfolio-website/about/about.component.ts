import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true
  isSkills:boolean=true;
  isExperience:boolean=false
  isEducation:boolean=false

  onTabLinkClick(link:any){
    if(link == 'skills'){
      this.isSkills = true;
      this.isEducation = false;
      this.isExperience = false
    }else if(link == 'experience'){
      this.isSkills = false;
      this.isEducation = false;
      this.isExperience = true
    }else{
      this.isSkills = false;
      this.isEducation = true;
      this.isExperience = false
    }
  }
}
