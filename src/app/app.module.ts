import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { CtaComponent } from './cta/cta.component';
import { ResenasComponent } from './resenas/resenas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServiciosComponent,
    BeneficiosComponent,
    PortafolioComponent,
    CtaComponent,
    ResenasComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
