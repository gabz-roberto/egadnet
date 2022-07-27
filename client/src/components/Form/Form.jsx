import React, { useState } from "react";
import Title from "../Title/Title";

import "./Form.css";

const Form = () => {
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const formatedData = data.cep.replace(/\D/g, "");

    if (formatedData.length !== 8) {
      alert("CEP Inválido");
      return;
    } else {
      fetch(`https://viacep.com.br/ws/${formatedData}/json/`)
        .then((resp) => resp.json())
        .then((obj) => {
          setStreet(obj.logradouro || 'Rua não especificada');
          setDistrict(obj.bairro || 'Bairro não especificado');
          setCity(obj.localidade || 'Cidade não especificada');
          setUf(obj.uf || 'UF não especificada');
        });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title title="Buscar CEP" />
      <input type="text" placeholder="CEP" name="cep" />
      <input type="text" placeholder="Rua" readOnly value={street} />
      <input type="text" placeholder="Bairro" readOnly value={district} />
      <input type="text" placeholder="Cidade" readOnly value={city} />
      <input type="text" placeholder="Estado" readOnly value={uf} />

      <button className="button">Buscar</button>
    </form>
  );
};

export default Form;
