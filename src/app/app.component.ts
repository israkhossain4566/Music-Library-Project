import { Component } from '@angular/core';
import { PublicService } from './public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showSettings = false;

  openSettings() {
    this.showSettings = true;
  }

  closeSettings() {
    this.showSettings = false;
  }

<<<<<<< HEAD


  msg: any;
  
  constructor(private pService: PublicService) {

  }
  ngOnInit(): void {
    this.showMessage();
  }

  showMessage() {
    this.pService.getMessage().subscribe(data => {
      this.msg = data,
        console.log(this.msg);
    });
  }
=======
>>>>>>> 08070d6da51dfe802c4f9582c0cec7afcdd4e16a
}
