import React, { useState, useContext } from "react";
import AlertContext from "../../Context/alert/alertContext";
import AddUsuarioForm from "../Usuario/AddUsuarioForm";

const Register = () => {
  return (
    <div className="col-md-6">
      <AddUsuarioForm />
    </div>
  );

  //   const alertContext = useContext(AlertContext);
  //   const { setAlert } = alertContext;

  //   const [user, setUser] = useState({
  //     nome: "",
  //     sobrenome: "",
  //     email: "",
  //     senha: "",
  //     senha2: "",
  //     cpf: "",
  //     cep: "",
  //     endereco: "",
  //     cidade: "",
  //     estado: "",
  //     celular: ""
  //   });

  //   const {
  //     nome,
  //     email,
  //     senha,
  //     senha2,
  //     sobrenome,
  //     cpf,
  //     endereco,
  //     cidade,
  //     estado,
  //     celular
  //   } = user;

  //   const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  //   const onSubmit = e => {
  //     e.preventDefault();
  //     if (nome === "" || email === "" || senha === "") {
  //       setAlert("Favor digitar todas as informações", "danger");
  //     } else if (senha !== senha2) {
  //       setAlert("As senhas não coincidem", "danger");
  //     } else {
  //       console.log("Register submit");
  //     }
  //   };

  //   return (
  //     <div className="form-container">
  //       <h1>
  //         <span className="text-primary">Cadastro</span>
  //       </h1>
  //       <form onSubmit={onSubmit}>
  //         <div className="form-group">
  //           <label htmlFor="nome" style={styles.label}>
  //             Nome
  //           </label>
  //           <input
  //             type="text"
  //             name="nome"
  //             value={nome}
  //             onChange={onChange}
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="sobrenome" style={styles.label}>
  //             Sobrenome
  //           </label>
  //           <input
  //             type="text"
  //             name="sobrenome"
  //             value={sobrenome}
  //             onChange={onChange}
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label style={styles.label} htmlFor="name" style={styles.label}>
  //             E-mail
  //           </label>
  //           <input
  //             type="email"
  //             name="email"
  //             value={email}
  //             onChange={onChange}
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="senha" style={styles.label}>
  //             Senha
  //           </label>
  //           <input
  //             type="password"
  //             name="senha"
  //             value={senha}
  //             onChange={onChange}
  //             minLength="8"
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="senha2" style={styles.label}>
  //             Confirmar Senha
  //           </label>
  //           <input
  //             type="password"
  //             name="senha2"
  //             value={senha2}
  //             onChange={onChange}
  //             minLength="8"
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="cpf" style={styles.label}>
  //             CPF
  //           </label>
  //           <input
  //             type="text"
  //             name="cpf"
  //             value={cpf}
  //             onChange={onChange}
  //             minLength="8"
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="cep" style={styles.label}>
  //             CEP
  //           </label>
  //           <input
  //             type="text"
  //             name="cep"
  //             value={cep}
  //             onChange={onChange}
  //             minLength="8"
  //             style={styles.input}
  //             className="form-control"
  //           />
  //         </div>
  //         <input
  //           type="submit"
  //           value="Cadastrar"
  //           className="btn btn-primary btn-block"
  //         />
  //       </form>
  //     </div>
  //   );
  // };

  // const styles = {
  //   label: {
  //     marginRight: "60px"
  //   },
  //   input: {
  //     width: "300px"
  //   }
};

export default Register;
