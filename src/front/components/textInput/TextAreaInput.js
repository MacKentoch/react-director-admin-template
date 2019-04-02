// @flow

import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

type Props = {
  label: string,
  id: string | number,
  value: string,
  nbrows: number,
  onChange: (value: string) => any,
};

function TextAreaInput({ label, id, value, onChange, nbrows = 3 }: Props) {
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
      <label htmlFor={id} className="control-label">
        {label}
      </label>
      <div>
        <textarea
          className="form-control"
          rows={nbrows}
          id={id}
          // value={stateValue}
          defaultValue={stateValue}
          // onChange={this.handlesOnChange} // IE11 misses some keys entered... yes I know what you think...
          onInput={handlesOnChange}
        />
      </div>
    </div>
  );
}

TextAreaInput.displayName = 'TextAreaInput';

TextAreaInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  nbrows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  delay: PropTypes.number,
};

export default TextAreaInput;
