// Formulario.tsx
import { useState } from 'react';

export function Formulario() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    email: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Formulário enviado com sucesso!');
      setFormData({
        nomeCompleto: '',
        telefone: '',
        email: '',
        cidade: '',
        estado: '',
      });
    } else {
      alert('Erro ao enviar o formulário.');
    }
  };

  return (
    <form 
    onSubmit={handleSubmit}>

      <input 
      name="nomeCompleto" 
      placeholder="Nome Completo" 
      value={formData.nomeCompleto} 
      onChange={handleChange} 
      required />

      <input 
      name="telefone" 
      placeholder="Telefone" 
      value={formData.telefone} 
      onChange={handleChange} 
      required />

      <input 
      name="email" 
      placeholder="Email" 
      type="email" 
      value={formData.email} 
      onChange={handleChange} 
      required />

      <input 
      name="cidade" 
      placeholder="Cidade" 
      value={formData.cidade} 
      onChange={handleChange} 
      required />

      <input 
      name="estado" 
      placeholder="Estado" 
      value={formData.estado} 
      onChange={handleChange} 
      required />

      <button type="submit">Enviar</button>
    </form>
  );
}
