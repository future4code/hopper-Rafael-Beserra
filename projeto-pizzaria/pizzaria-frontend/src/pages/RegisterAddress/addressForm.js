import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {
  InputDada,
  InputsContainer,
  LoginFormContainer,
  RegisterButton,
} from "./styled";
import { singUpAddress } from "../../services/user";

function AddressForm() {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    street: "",
    number: "",
    zipcode: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    singUpAddress(form, clear, navigate);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <InputDada
            name="street"
            value={form.street}
            onChange={onChange}
            label="Rua"
            placeholder="Rua"
            fullWidth
            margin="normal"
            required
          />

          <InputDada
            name="number"
            value={form.number}
            onChange={onChange}
            label="Número"
            placeholder="Número"
            fullWidth
            margin="normal"
            required
          />

          <InputDada
            name="zipcode"
            value={form.zipcode}
            onChange={onChange}
            label="CEP"
            placeholder="CEP"
            fullWidth
            margin="normal"
            required
          />

          <RegisterButton type="submit" variant="contained">
            CADASTRAR ENDEREÇO
          </RegisterButton>
        </InputsContainer>
      </form>
    </LoginFormContainer>
  );
}

export default AddressForm;
