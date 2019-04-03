// @flow

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

type Props = {
  label: string,
  id: string | number,
  value: string,
  onChange: (value: string) => any,
};

function TextInput({ label, id, value, onChange }: Props) {
  const [stateValue, setStateValue] = useState('');

  useEffect(() => {
    if (value !== stateValue && stateValue.length === 0) {
      setStateValue(value);
    }
  }, [stateValue, value]);

  const handlesOnChange = useCallback((event?: SyntheticEvent<>) => {
    event && event.preventDefault();

    // $FlowIgnore
    const newValue = event.target.value;
    setStateValue(newValue);
    onChange(newValue);
  }, []);

  return (
    <div className="form-group">
      <label className="control-label" htmlFor={id}>
        {label}
      </label>
      <div>
        <input
          className="form-control"
          id={id}
          type="text"
          // value={value}
          defaultValue={stateValue}
          // onChange={this.handlesOnChange} // IE11 misses some keys entered... yes I know what you think...
          onInput={handlesOnChange}
        />
      </div>
    </div>
  );
}

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
