import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD

import { HttpClientModule, HttpClient } from '@angular/common/http';
=======
<<<<<<< HEAD

import { HttpClientModule, HttpClient } from '@angular/common/http';
=======
>>>>>>> 08070d6da51dfe802c4f9582c0cec7afcdd4e16a
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { FormsModule } from '@angular/forms';
import { PremiumMembershipComponent } from './premium-membership/premium-membership.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentComponent } from './payment/payment.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './song-list/song-list.component';
import { ArtistsComponent } from './artists/artists.component';
<<<<<<< HEAD
import { HelplineComponent } from './helpline/helpline.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
=======
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SearchComponent,
    MusicPlayerComponent,
    PremiumMembershipComponent,
    SettingsComponent,
    PaymentComponent,
    ArtistListComponent,
    PlaylistComponent,
    SongListComponent,
<<<<<<< HEAD
    ArtistsComponent,
    HelplineComponent,
    DeactivateComponent,
    FeedbackComponent,
    ContactComponent,
    ReportComponent
=======
    ArtistsComponent
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule
=======
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule
=======
    ReactiveFormsModule
>>>>>>> 08070d6da51dfe802c4f9582c0cec7afcdd4e16a
>>>>>>> 3e93786da94f7391e7485ff54174a0ce65c0f347
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
