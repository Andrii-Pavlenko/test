import { format, intervalToDuration, addMinutes } from 'date-fns';


export const dateValidation = (obj) =>
  `${obj.years ? `${obj.years}y` : ''}${obj.months ? `${obj.months}mo` : ''}${obj.days ? `${obj.days}d` : ''}${
    obj.hours ? `${obj.hours}h` : ''
  }${obj.minutes ? `${obj.minutes}m` : ''}${obj.seconds ? `${obj.seconds}s` : ''}`;