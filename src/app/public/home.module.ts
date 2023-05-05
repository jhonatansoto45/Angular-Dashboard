import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, IndexComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
