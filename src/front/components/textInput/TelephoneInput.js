// @flow

import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  label: string,
  id: string | number,
  value: string,
  onChange: (value: string) => any,
};

const telephoneRegex = /^(\+33|0033|0)([0-9])[0-9]{8}$/g;

function TelephoneInput({ label, id, value, onChange }: Props) {
  const [valid, setValid] = useState(true);
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
    const isValid = telephoneRegex.test(newValue);

    setValid(isValid);
    setStateValue(newValue);
    onChange(newValue);
  }, []);

  return (
    <div
      className={cx({
        'form-group': true,
        'has-error': !valid,
      })}
    >
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

TelephoneInput.displayName = 'TelephoneInput';

TelephoneInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TelephoneInput;
