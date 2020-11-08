import { days } from './constData';
import { hours } from './constData';
import { mins } from './constData';
import { secs } from './constData';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});