export type TInputType =
  | "text"
  | "password"
  | "email"
  | "phone"
  | "date"
  | "number"
  | "radio"
  | "file"
  | "tel";

export type TFormElement =
  | "input"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox";

export interface IUserInput {
  name: string;
  element: TFormElement;
  type?: TInputType;
  value: string | number;
  text?: string;
  options?: { key: string; name: string | "" }[];
  required?: boolean;
  validations?: string[] | null;
}

export interface IUserData {
  [key: string]: IUserInput;
}