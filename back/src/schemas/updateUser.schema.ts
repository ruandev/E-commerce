import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  frist_name: yup.string(),
  last_name: yup.string(),
  email: yup.string().email({ message: "Formato de email inválido!" }),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      {
        message:
          "A senha deve conter ao menos um dígito, uma letra maiúscula, um caractere especial e oito dígitos!",
      }
    ),
});
