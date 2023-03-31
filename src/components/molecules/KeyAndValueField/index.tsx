import { Stack } from '@mui/material';
import React from 'react'
import { KeyField,ValueField } from './index.styles';

interface keyAndValueFieldProps{
    keyText:string;
    valueText:string;
}

const KeyAndValueField = (props:keyAndValueFieldProps) => {
    const {keyText,valueText}=props;
  return (
    <Stack direction='row'>
        <KeyField fontWeight={600}>{keyText} : </KeyField>
        <ValueField>{valueText}</ValueField>
    </Stack>
  )
}

export default KeyAndValueField