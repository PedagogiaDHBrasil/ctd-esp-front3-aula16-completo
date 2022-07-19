import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <h1>Login blog de receitas</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <p>{errors.email?.type === "required" && "Digite um email"}</p>

        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password", { required: true })}
        />
        <p>{errors.password?.type === "required" && "Senha é obrigatória"}</p>

        <div className="checkbox">
          <input type="checkbox" {...register("term")} />
          <label>Manter logado</label>
        </div>

        <input type="submit" value="Logar" />
      </form>
    </main>
  );
};

export default Home;
