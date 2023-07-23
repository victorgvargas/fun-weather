import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrentTempCardComponent } from './components/current-temp-card/current-temp-card.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { WeatherGridComponent } from './components/weather-grid/weather-grid.component';
import { TimePipe } from './pipes/time.pipe';
import { SpeedPipe } from './pipes/speed.pipe';
import { DistancePipe } from './pipes/distance.pipe';
import { UviPipe } from './pipes/uvi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    CurrentTempCardComponent,
    TemperaturePipe,
    WeatherGridComponent,
    TimePipe,
    SpeedPipe,
    DistancePipe,
    UviPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
