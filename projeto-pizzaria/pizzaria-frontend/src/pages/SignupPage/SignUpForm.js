import React from "react";
import {
  InputDada,
  InputsContainer,
  LoginFormContainer,
  RegisterButton,
} from "./styled";
import useForm from "../../hooks/useForm";
import { singUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    singUp(form, clear, navigate);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <InputDada
            name="name"
            value={form.name}
            onChange={onChange}
            label="Nome"
            placeholder="Nome"
            fullWidth
            margin="normal"
            required
          />
          <InputDada
            name="email"
            value={form.email}
            onChange={onChange}
            label="E-mail"
            placeholder="E-mail"
            fullWidth
            margin="normal"
            required
            type={"email"}
          />

          <InputDada
            name="password"
            value={form.password}
            onChange={onChange}
            label="Senha"
            placeholder="Senha"
            fullWidth
            margin="normal"
            required
            type={"password"}
          />
          <RegisterButton type="submit" fullWidth variant="contained">
            CADASTRAR
          </RegisterButton>
        </InputsContainer>
      </form>
    </LoginFormContainer>
  );
};

export default SignUpForm;
