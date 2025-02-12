import { useState, ChangeEvent } from 'react';

const useInputChange = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, handleChange };
};

export default useInputChange;
