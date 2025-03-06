import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

// Import your custom modules
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { SharedModule } from './shared/shared.module';
import { routes } from './app-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular built-in providers
    provideClientHydration(), // Replaces BrowserModule.withServerTransition()
    provideAnimations(), // Replaces BrowserAnimationsModule
    provideRouter(routes), // Replaces AppRoutingModule
    // provideForms(), // Replaces FormsModule
    // provideReactiveForms(), // Replaces ReactiveFormsModule

    // Third-party modules using importProvidersFrom
    importProvidersFrom(
      ToastrModule.forRoot(), // Configures Toastr
      CarouselModule,
      SocialLoginModule,
      NgxPayPalModule,
      CarouselModule
    ),

    // Your application's custom modules
    importProvidersFrom(
      FooterModule,
      HeaderModule,
      MobileModule,
      SharedModule
    ),

    // Social Auth Configuration
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('166133418738517')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('751769800156-f6cdh1rekb54j4ipakdngjr06sg7q2lt.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }

    // Uncomment for locale support
    // { provide: LOCALE_ID, useValue: 'it' }
  ]
};