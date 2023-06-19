import { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from './styled';

export const ContactForm = () => {
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem('NAME')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(window.localStorage.getItem('NUMBER')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('NAME', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem('NUMBER', JSON.stringify(number));
  }, [number]);

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={'name'}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        id={'name'}
        title="min 3, max 40 symbols"
        pattern="^.{3,40}$"
        required
      />
      <Label htmlFor={'number'}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        id={'number'}
        title="Only figures and spaces, min 6, max 20 symbols"
        pattern="[0-9\s]{6,20}"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
