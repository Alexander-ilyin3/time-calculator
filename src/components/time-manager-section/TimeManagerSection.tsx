import React from 'react';

import { Paper } from '../../shared/components/Paper/Paper';

// import styles from './TimeManagerSection.module.scss';

type PropTypes = {};

export const TimeManagerSection: React.FC<PropTypes> = () => {
  return (
    <div className="prose flex flex-col items-start mt-6">
      <h2>Time calculation</h2>
      <Paper className="p-4 w-full rounded-200"></Paper>
    </div>
  );
};
