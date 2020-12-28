import React, { useState } from 'react';
import { Button, DatePicker, Radio, Card } from 'antd';
import { getTimeDistance } from '@/utils';
import { FormattedMessage } from 'umi';

const { RangePicker } = DatePicker;
const timeFormat = 'DD-M-YY h:mm a';

const History = () => {
  const [duration, setDuration] = useState(getTimeDistance('today'));
  const [selected, setSelected] = useState('today');
  const selectDate = (e: any) => {
    setSelected(e.target.value);
    if (e.target.value !== 'custom') setDuration(getTimeDistance(e.target.value));
  };

  return (
    <Card>
      <p>
        <Radio.Group onChange={selectDate} value={selected} buttonStyle="solid" size="small">
          <Radio.Button value="today">
            <FormattedMessage id="util.today" defaultMessage="Today" />
          </Radio.Button>
          <Radio.Button value="yesterday">
            <FormattedMessage id="util.yesterday" defaultMessage="Yesterday" />
          </Radio.Button>
          <Radio.Button value="week">
            <FormattedMessage id="util.week" defaultMessage="Week" />
          </Radio.Button>
          <Radio.Button value="custom">
            <FormattedMessage id="util.custom" defaultMessage="Custom" />
          </Radio.Button>
        </Radio.Group>
      </p>
      <p>
        <RangePicker
          showTime
          format={timeFormat}
          order
          value={duration}
          onChange={(time) => {
            setSelected('custom');
            setDuration(time);
          }}
        />
      </p>
      <p>
        <Button type="primary" onClick={() => {}}>
          Show Playback
        </Button>
      </p>
    </Card>
  );
};

export default History;
