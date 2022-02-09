import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as jenkinsapi from 'jenkins-api';

@Controller('deploy')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async fetchResponsePromise() {
    const jenkins = jenkinsapi.init(
      'http://priscila_torres:116e0946b004e54280babae8b0356d81d5@localhost:8080',
    );

    jenkins.build('firstproject', {}, function (err, data) {
      if (err) {
        return console.log('error', err);
      }
      console.log('data', data);
    });
  }
}
