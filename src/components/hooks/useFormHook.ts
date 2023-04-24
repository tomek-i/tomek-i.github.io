import { useState } from 'react';

// TODO: there is already a hook used check out the contact form
export const useForm = <T>(callback: () => void) => {
  const [values, setValues] = useState({});

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: values as T,
  };
};
