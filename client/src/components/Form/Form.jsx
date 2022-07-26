import React, { useState } from "react";
import axios from "axios";

import { baseURL } from "../../../../server/config/api";

import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="CEP" />
    </form>
  );
};

export default Form;
