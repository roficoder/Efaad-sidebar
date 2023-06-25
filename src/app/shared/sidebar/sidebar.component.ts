import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,AfterViewInit{
  @Input() body; 
  @ViewChild('sidebar') sidebar : ElementRef
  sideCheck:boolean;

ngOnInit(): void {
  this.sideCheck = JSON.parse(sessionStorage.getItem('sideCheck'));
  console.log(this.sideCheck);
  
  this.checkSideBar()
}


ngAfterViewInit(): void {
  this.checkSideBar()
}

checkSideBar(){
  const body = this.sidebar.nativeElement;

  if(this.sideCheck){
    body.classList.add('close');
  }
}

  hideSidebar(){
    const body = this.sidebar.nativeElement;
    if(body.classList.contains('close')){
      sessionStorage.removeItem('sideCheck');
      body.classList.remove('close');
    }else{
      body.classList.add('close');
      sessionStorage.setItem('sideCheck',JSON.stringify(true));
    }
  }
}
