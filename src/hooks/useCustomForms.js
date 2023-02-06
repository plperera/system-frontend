import { useState } from 'react';

function useCustomForm() {
  const [form, setForm] = useState({});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  return [form, handleForm, setForm];
}

export { useCustomForm };
