import React from "react";
import { H1, Headers, Main, Span } from "./styles";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema/registerSchema";
import { useContext } from "react";
import { UserContext } from "../../UserContext/UserContext";

export const Registration = () => {
  const { Disabled, userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      bio: "",
      contact: "",
      course_module: "",
    },
    mode: "onBlur",
  });

  const submit = async (data) => {
    await userRegister(data);
    reset();
  };

  return (
    <Main>
      <Headers>
        <img src={Logo} alt="Logo" />
        <Link to={"/"}>Voltar</Link>
      </Headers>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <H1>Crie sua conta</H1>
        <Span>Rapido e grátis, vamos nessa</Span>
        <Inputs
          id={"Nome"}
          placeholder={"Digite aqui seu nome"}
          label={"Nome"}
          type={"text"}
          register={register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <Inputs
          id={"Email"}
          placeholder={"Digite aqui seu email"}
          label={"Email"}
          type={"email"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <Inputs
          id={"Senha"}
          placeholder={"Digite aqui sua senha"}
          label={"Senha"}
          type={"password"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <Inputs
          id={"Confirmar Senha"}
          placeholder={"Digite novamente sua senha"}
          label={"Confirmar Senha"}
          type={"password"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <Inputs
          id={"Bio"}
          placeholder={"Fale sobre você"}
          label={"Bio"}
          type={"text"}
          register={register("bio")}
        />
        {errors.bio?.message && <p>{errors.bio.message}</p>}
        <Inputs
          id={"Contato"}
          placeholder={"Opção de contato"}
          label={"Contato"}
          type={"text"}
          register={register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}
        <label id="Selecionar módulo">Selecionar módulo</label>
        <select {...register("course_module")} id="Selecionar módulo">
          <option>Primeiro Módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}
        <Button disabled={Disabled} Name={"Cadastrar"} />
      </form>
    </Main>
  );
};
