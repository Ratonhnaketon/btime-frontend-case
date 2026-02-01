'use client'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Props = {
  label: string;
  options: { label: string; value: string }[]
  selected: string[],
  onChange(_: string[]): void
}

export function MultiSelect(props: Props) {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    props.onChange(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={props.selected}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(value) => value.map(el => props.options.find((option) => option.value === el)?.label ?? '').join(', ')}
          MenuProps={MenuProps}
        >
          {props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={props.selected.includes(option.value)} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
