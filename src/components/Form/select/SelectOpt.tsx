import React from 'react'
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import type { FC, PropsWithChildren } from 'react';
interface Props {
  size?: 'small' | 'medium' | 'large' | undefined;
  color?: string | undefined;
  title?: string | undefined;
  children?: React.ReactNode;
  width?: number | undefined;
  val?:string

}

export const SelectOpt:FC<PropsWithChildren<Props>> = ({
  size='small',
  color='blue',
  title = 'all',
  width=140,
  children,
  val='all'
}) => {
  const [select, setSelect] = React.useState(val);
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: width }} size={size}>
      <InputLabel id="demo-select-small-label">{title}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={select}
        label={select}
        onChange={handleChange}
      >
        {children}
      </Select>
    </FormControl>
  )
}
