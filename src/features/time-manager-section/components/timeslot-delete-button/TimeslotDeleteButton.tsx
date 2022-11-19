import React from 'react';

import { Button } from '@shared/components/Button/Button';

type PropTypes = {};

export const TimeslotDeleteButton: React.FC<PropTypes> = () => {
  return <Button sharedVariant="secondary">DELETE</Button>;
};
