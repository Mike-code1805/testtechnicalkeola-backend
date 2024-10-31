import * as yup from 'yup';

export const singInUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('El correo debe ser un correo valido.')
      .required('El correo es requerido.'),
    password: yup
      .string()
      .min(6, 'La contraseña debe ser de al menos 6 caracteres.')
      .required('La contraseña es requerida.'),
  }),
});

export const signUpUserSchema = yup.object({
  body: yup.object({
    username: yup.string().required('El nombre completo es requerido.'),
    email: yup
      .string()
      .email('El correo debe ser un correo valido.')
      .required('El correo es requerido.'),
    password: yup
      .string()
      .min(5, 'La contraseña debe ser de al menos 5 caracteres.')
      .required('La contraseña es requerida.'),
    passwordConfirmation: yup
      .string()
      .required('La confirmacion de la contraseña es requerida.')
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir.'),
  }),
});

export const recoveryPasswordUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('El correo debe ser un correo valido.')
      .required('El correo es requerido.'),
    password: yup
      .string()
      .min(5, 'La contraseña debe ser de al menos 5 caracteres.')
      .required('La contraseña es requerida.'),
    passwordConfirmation: yup
      .string()
      .required('La confirmacion de la contraseña es requerida.')
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir.'),
  }),
});
