import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.settingsForm = this.formBuilder.group({
      username: [''],
      isPrivate: [false],
      receiveNotifications: [true],
      twoFactorAuth: [false],
    });
  }

  saveSettings() {
    // Implement logic to save settings to the backend
    console.log('Settings saved:', this.settingsForm.value);
  }
}
