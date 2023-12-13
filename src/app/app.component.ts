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
=======
<<<<<<< HEAD
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347


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
<<<<<<< HEAD
=======
=======
>>>>>>> 08070d6da51dfe802c4f9582c0cec7afcdd4e16a
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347
}
