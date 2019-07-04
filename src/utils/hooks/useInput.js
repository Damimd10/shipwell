import { useState } from 'react';

const useInput = (name, defaultValue, validations) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);

  const handleChange = event => {
    setValue(event.target.value);
    setError(null);
  };

  const handleValidate = () => {
    const error = validations.filter(v => !v.fn(value));
    if (error.length > 0) {
      setError(error[0].message);
    } else {
      setError(null);
    }

    return error;
  };

  const handleBlur = () => {
    handleValidate();
  };

  return {
    props: {
      error,
      name,
      onBlur: handleBlur,
      onChange: handleChange,
      value,
      invalid: !!error,
    },
    validate: handleValidate,
  };
};

export default useInput;
