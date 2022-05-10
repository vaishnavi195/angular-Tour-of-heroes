import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeroComponent,
    HeroDetailComponent,
    MessageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
