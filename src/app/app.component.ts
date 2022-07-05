import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  currentTimer = '00 : 00';
  intervalInstance;

  // StopWatch Start, Stop , Pause

  startStopwatch() {
    clearInterval(this.intervalInstance);

    if (this.currentTimer !== '00 : 00') {
      let time: any = this.currentTimer.split(' : ');
      console.log(time);
      this.updateTime(Number(time[1]) * 1000, Number(time[0]));
    } else {
      this.updateTime();
    }
  }

  updateTime(second = 0, minute = 0) {
    this.intervalInstance = setInterval(() => {
      if (second === 60000) {
        minute += 1;
        second = 0;
      }
      second = second + 1000;
      this.currentTimer = `${minute} : ${second / 1000}`;
    }, 1000);
  }

  pauseStopwatch() {
    clearInterval(this.intervalInstance);
  }

  stopStopwatch() {
    clearInterval(this.intervalInstance);
    this.currentTimer = '00 : 00';
  }
}
