import {BASE_AMOUNT_SUPPORT, BASE_COURSE_TIME} from '../constants';

export const newLevelSupport = (user, newDonat) => {
    const currentTime = new Date();
    const currentTimeUnix = Math.floor(currentTime.getTime() / 1000);

    const registerTime = new Date(user.registerDate);
    const registerTimeUnix = Math.floor(registerTime.getTime() / 1000);

    const totalTime = Math.max(currentTimeUnix - registerTimeUnix, BASE_COURSE_TIME);

    const totalDonat = user.donats.reduce(
      (total, donat) => {
      return total = total + Number(donat.amount);
      }, Number(newDonat));

    return ((totalDonat / BASE_AMOUNT_SUPPORT) * (BASE_COURSE_TIME / totalTime));
  };