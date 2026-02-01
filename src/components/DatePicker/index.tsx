'use client'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerBase } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

type Props = {
  label: string;
  value?: Date
  onChange?(_: Date): void;
}

export function DatePicker(props: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerBase
        label={props.label} 
        value={dayjs(props.value)}
        onChange={newValue => {
          const date = dayjs(newValue).toDate()
          props.onChange?.(date)
        }}
      />
    </LocalizationProvider>
  );
}
