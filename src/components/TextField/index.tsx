import { TextFieldProps as TextFieldPropsMui } from '@mui/material';

import { TextFieldStyled } from './styled';

type Props = {
  /**
   * The size of the input. Medium is the default size.
   * @type 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  onChange(_: string): void
} & Omit<TextFieldPropsMui, 'size' | 'onChange'>;

export function TextField (props: Props) {
  return (
    <>
      <TextFieldStyled
        name={props.name}
        defaultValue={props.defaultValue}
        autoComplete={props.autoComplete}
        hiddenLabel={props.hiddenLabel}
        focused={props.focused}
        placeholder={props.placeholder}
        type={props.type}
        label={props.label}
        value={props.value}
        helperText={false}
        error={props.error}
        style={props.style}
        multiline={props.multiline}
        rows={props.rows}
        disabled={props.disabled}
        maxRows={props.maxRows}
        fullWidth={props.fullWidth}
        variant="filled"
        required={props.required}
        onError={props.onError}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onChange={(event) => props.onChange(event.target.value)}
        onClick={props.onClick}
        onBlur={props.onBlur}
        className={`size-${props.size}`}
      />
    </>
  );
}
