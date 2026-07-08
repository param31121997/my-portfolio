import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      icon: 'fa-solid fa-code',
      skills: ['Java', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frameworks',
      icon: 'fa-solid fa-layer-group',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Angular']
    },
    {
      title: 'Architecture',
      icon: 'fa-solid fa-sitemap',
      skills: ['Microservices', 'REST APIs', 'JWT Authentication']
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fa-solid fa-cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Azure', 'CI/CD']
    },
    {
      title: 'Messaging',
      icon: 'fa-solid fa-tower-broadcast',
      skills: ['Apache Kafka', 'RabbitMQ']
    },
    {
      title: 'Data',
      icon: 'fa-solid fa-database',
      skills: ['SQL Server', 'MongoDB', 'Elasticsearch']
    },
    {
      title: 'Testing',
      icon: 'fa-solid fa-vial',
      skills: ['JUnit', 'Jasmine', 'SonarQube']
    },
    {
      title: 'Tools & Process',
      icon: 'fa-solid fa-toolbox',
      skills: ['Git', 'Maven', 'Agile', 'Scrum', 'Waterfall']
    }
  ];

  coreCompetencies: string[] = [
    'Team Leadership',
    'Cross-functional Collaboration',
    'Problem Solving',
    'Code Quality & Reviews'
  ];
}
