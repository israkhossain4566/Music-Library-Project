import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { PremiumMembershipComponent } from './premium-membership/premium-membership.component';
import { SettingsComponent } from './settings/settings.component';
import { PaymentComponent } from './payment/payment.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './song-list/song-list.component';
import { ArtistsComponent } from './artists/artists.component';
import { HelplineComponent } from './helpline/helpline.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', redirectTo: '/login-signup', pathMatch: 'full' },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'music-player', component: MusicPlayerComponent},
  {path: 'premium-membership', component: PremiumMembershipComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'artist-list', component: ArtistListComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'song-list', component: SongListComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'helpline', component: HelplineComponent},
  {path: 'deactivate', component: DeactivateComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
