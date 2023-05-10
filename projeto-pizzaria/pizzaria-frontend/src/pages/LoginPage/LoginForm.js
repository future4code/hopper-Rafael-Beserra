import React from "react";
import {
  InputDada,
  InputsContainer,
  LoginButton,
  LoginFormContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <InputDada
            name="email"
            placeholder="Email"
            value={form.email}
            required
            onChange={onChange}
            type={"email"}
          />
          <InputDada
            name="password"
            placeholder="Senha"
            value={form.password}
            required
            onChange={onChange}
            type={"password"}
          />

          <LoginButton type="submit" variant="contained">
            ENTRAR
          </LoginButton>
        </InputsContainer>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
