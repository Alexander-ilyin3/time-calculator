import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import { Drawer } from '@mui/material';

import { SelectedSlotTypesMap, TimeSlotEditingType } from '@features/time-manager-section/TimeManagerSection';

import { ScrollableElement } from './components/scrollable-element/ScrollableElement';
import { ScrollBarElementWrapper } from './components/scrollbar-element-wrapper/ScrollBarElementWrapper';
import { hours, minutes, amPm } from './helpers/constants';

import s from './TimePickerModal.module.scss';

type PropTypes = {
  open: boolean;
  setDrawerOpen: (state: boolean) => void;
  drawerOnClose: (data: SelectedSlotTypesMap) => void;
  timeSlotEditing: TimeSlotEditingType | undefined;
};

export const TimePickerModal: React.FC<PropTypes> = ({ open, setDrawerOpen, drawerOnClose }) => {
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const [selectedHoursElement, setSelectedHoursElement] = useState<{ element: HTMLElement; index: number }>();
  const [selectedMinutesElement, setSelectedMinutesElement] = useState<{ element: HTMLElement; index: number }>();
  const [selectedAmpmElement, setSelectedAmpmElement] = useState<{ element: HTMLElement; index: number }>();

  const selectedHoursValue = hours[selectedHoursElement?.index || 0];
  const selectedMinutesValue = minutes[selectedMinutesElement?.index || 0];
  const selectedAmpmValue = amPm[selectedAmpmElement?.index || 0];

  const selectedItemsMap: SelectedSlotTypesMap = {
    hours: selectedHoursValue,
    minutes: selectedMinutesValue,
    ampm: selectedAmpmValue,
  };

  type Mode = 'INPUT' | 'OUTPUT';

  const pinMode = (num: number, mode: Mode) => {};

  pinMode(2, 'OUTPUT');

  return (
    <Drawer
      PaperProps={{ ref: ref }}
      anchor="bottom"
      open={open}
      onClick={(v) => {
        v.target === ref.current || !ref.current?.contains(v.target as Node) ? setDrawerOpen(false) : null;
      }}
      onClose={() => drawerOnClose(selectedItemsMap)}
      classes={{ paper: 'p-4' }}
    >
      <div className={clsx('!h-53 flex flex-row', s.DrawerRoot)}>
        <ScrollBarElementWrapper setSelectedElement={setSelectedHoursElement}>
          <ScrollableElement elements={hours} />
        </ScrollBarElementWrapper>
        <ScrollBarElementWrapper setSelectedElement={setSelectedMinutesElement}>
          <ScrollableElement elements={minutes} />
        </ScrollBarElementWrapper>
        <ScrollBarElementWrapper setSelectedElement={setSelectedAmpmElement}>
          <ScrollableElement elements={amPm} />
        </ScrollBarElementWrapper>
      </div>
    </Drawer>
  );
};
