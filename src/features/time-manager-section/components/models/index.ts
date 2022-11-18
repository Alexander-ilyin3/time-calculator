import moment from 'moment';

export type TimeSlotItemType = {
  startTime: moment.Moment | null;
  endTime: moment.Moment | null;
  id: number;
};
