import { useState } from 'react';

function useCustomForm(initialValue) {
  const [form, setForm] = useState(initialValue || {});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  return [form, handleForm, setForm];
}

export { useCustomForm };
