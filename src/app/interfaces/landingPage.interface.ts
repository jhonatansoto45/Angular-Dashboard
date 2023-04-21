export interface ISignupForm {
  name: string;
  type: string;
  icon: string;
  placeholder: string;
}

export interface ISigninForm {
  name: string;
  type: string;
  icon: string;
  placeholder: string;
}

export type TForm = ISignupForm | ISigninForm;
