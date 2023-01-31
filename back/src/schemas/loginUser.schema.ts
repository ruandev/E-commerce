import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório.")
    .email({ message: "Formato de email inválido!" }),
  password: yup
    .string()
    .required("Senha é obrigatória.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "A senha deve conter ao menos um dígito, uma letra maiúscula, um caractere especial e oito dígitos;"
    ),
});
