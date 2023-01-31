import * as yup from "yup";

const cadasterSchema = yup.object().shape({
  frist_name: yup.string().required({ message: "Nome é obrigatório!" }),
  last_name: yup.string().required({ message: "Sobrenome é obrigatório!" }),
  email: yup
    .string()
    .required({ message: "Email é obrigatório!" })
    .email({ message: "Formato de email inválido!" }),
  password: yup
    .string()
    .required({ message: "Senha é obrigatória." })
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      {
        message:
          "A senha deve conter ao menos um dígito, uma letra maiúscula, um caractere especial e oito dígitos!",
      }
    ),
});
export default cadasterSchema;
