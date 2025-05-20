import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isOpen:boolean=true;
sideMenu:any;
constructor(public router:Router){
}
  onClick(path:string){
    this.router.navigate([`./${path}`])
  }

  openMenu(){
    this.sideMenu =  document.getElementById("sidemenu");
    this.sideMenu.style.right = "0";
  }

  closeMenu(){
    this.sideMenu =  document.getElementById("sidemenu");
    this.sideMenu.style.right = "-200px";
  }

}
