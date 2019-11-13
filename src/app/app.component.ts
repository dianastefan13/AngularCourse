import { Component } from '@angular/core';
import { PlayWithTsService } from './services/play-with-ts.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpServiceService } from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private playWithTsService: PlayWithTsService, 
    private translateService: TranslateService,
    private httpService: HttpServiceService) {
    // this.translateService.setDefaultLang('en');
    // this.translateService.use('ro');
    // this.httpService.getHeroes();
    // this.httpService.getHeroById(1);
    // this.httpService.createHero({"name" : "Created Hero", "id" : 10});

  }
  title = 'curs-angular-project';
  message: string = 'Hello world - 2!';
  currentLanguage = 'ro';

  changeLanguage() {
    this.translate("CHANGE LANGUAGE");
    const currentLang = this.translateService.currentLang;
    if (currentLang == 'ro') {
      this.translateService.use('en');
      this.currentLanguage = 'en';
    } else {
      this.translateService.use('ro');
      this.currentLanguage = 'ro';
    }
  }

  translate(key){
    this.translateService.get(key).subscribe(value => console.log(value));
  }
}
