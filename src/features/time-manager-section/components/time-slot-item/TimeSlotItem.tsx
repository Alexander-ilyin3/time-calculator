import moment from 'moment';
import React from 'react';

import { TextField } from '@shared/components/Input/TextField';

import { TimeSlotEditingType } from '@features/time-manager-section/TimeManagerSection';

import { TimeSlotItemType } from '../models';

type PropTypes = {
  item: TimeSlotItemType;
  openTimePickerModal: (openStatus: boolean) => void;
  setTimeSlotEditing: (props: TimeSlotEditingType) => void;
};

export const TimeSlotItem: React.FC<PropTypes> = ({ item, openTimePickerModal, setTimeSlotEditing }) => {
  return (
    <div>
      <TextField
        value={moment(item.startTime).format('HH:mm A')}
        onClick={() => {
          setTimeSlotEditing({ item, slot: 'startTime' });
          openTimePickerModal(true);
        }}
      ></TextField>
      <TextField
        value={moment(item.endTime).format('HH:mm A')}
        onClick={() => {
          setTimeSlotEditing({ item, slot: 'endTime' });
          openTimePickerModal(true);
        }}
      ></TextField>
    </div>
  );
};
