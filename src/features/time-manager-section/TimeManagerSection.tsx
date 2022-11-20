import moment from 'moment';
import React, { useState } from 'react';

import { Paper } from '@shared/components/Paper/Paper';

import { TimePickerModal } from './components/time-picker-modal/TimePickerModal';
import { TimeSlotItem } from './components/time-slot-item/TimeSlotItem';
import { TimeSlotItemType } from './models';

export type TimeSlotEditingType = { item: TimeSlotItemType; slot: 'startTime' | 'endTime' };

export type SelectedSlotTypesMap = {
  hours: number;
  minutes: number;
  ampm: string;
};

export const TimeManagerSection: React.FC = () => {
  const [slotItems, setSlotItems] = useState<TimeSlotItemType[]>([{ id: 0, startTime: null, endTime: null }]);
  const [timeSlotEditing, setTimeSlotEditing] = useState<TimeSlotEditingType>();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openTimePickerModal = (openStatus: boolean) => {
    setDrawerOpen((_) => openStatus);
  };

  const changeInputData = (data: SelectedSlotTypesMap) => {
    console.log('new data for input', data);
    setSlotItems((slots) => {
      const editingSlot = slots.find((slot) => slot === timeSlotEditing?.item);
      const hour = data.ampm === 'PM' ? data.hours + 12 : data.hours;

      if (editingSlot) {
        return [
          ...slots.filter((slot) => slot !== timeSlotEditing?.item),
          timeSlotEditing?.slot === 'startTime'
            ? { ...editingSlot, startTime: moment({ hour: hour, minute: data.minutes }) }
            : { ...editingSlot, endTime: moment({ hour: hour, minute: data.minutes }) },
        ];
      }
      return slots;
    });
  };

  return (
    <div className="prose flex flex-col items-start mt-6">
      <h2>Time calculation</h2>
      <Paper className="p-4 w-full rounded-200">
        {slotItems.map((item, i) => (
          <TimeSlotItem
            setTimeSlotEditing={setTimeSlotEditing}
            openTimePickerModal={openTimePickerModal}
            key={i}
            item={item}
          ></TimeSlotItem>
        ))}
        <TimePickerModal
          timeSlotEditing={timeSlotEditing}
          drawerOnClose={changeInputData}
          open={isDrawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      </Paper>
    </div>
  );
};
