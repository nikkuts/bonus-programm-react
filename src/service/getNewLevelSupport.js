import {BASE_AMOUNT_SUPPORT, BASE_COURSE_TIME} from '../constants';

export const getNewLevelSupport = (totalTime, totalDonat, newDonat) => {
  const newLevelSupport = (((Number(totalDonat) + Number(newDonat)) / BASE_AMOUNT_SUPPORT) * (BASE_COURSE_TIME / Number(totalTime)));
  return newLevelSupport;
};
