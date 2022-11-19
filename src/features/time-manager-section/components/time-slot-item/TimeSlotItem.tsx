import moment from 'moment';
import React from 'react';

import { TextField } from '@shared/components/Input/TextField';

import { TimeSlotEditingType } from '@features/time-manager-section/TimeManagerSection';
import { TimeSlotItemType } from '@features/time-manager-section/models';

import { TimeslotDeleteButton } from '../timeslot-delete-button/TimeslotDeleteButton';

type PropTypes = {
  item: TimeSlotItemType;
  openTimePickerModal: (openStatus: boolean) => void;
  setTimeSlotEditing: (props: TimeSlotEditingType) => void;
};

export const TimeSlotItem: React.FC<PropTypes> = ({ item, openTimePickerModal, setTimeSlotEditing }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <TextField
          label="Start Time"
          disabled
          value={item.startTime ? moment(item.startTime).format('hh:mm A') : ''}
          onClick={() => {
            setTimeSlotEditing({ item, slot: 'startTime' });
            openTimePickerModal(true);
          }}
        ></TextField>
        <TextField
          label="End Time"
          disabled
          value={item.endTime ? moment(item.endTime).format('hh:mm A') : ''}
          onClick={() => {
            setTimeSlotEditing({ item, slot: 'endTime' });
            openTimePickerModal(true);
          }}
        ></TextField>
      </div>
      <TimeslotDeleteButton>Delete</TimeslotDeleteButton>
    </div>
  );
};
