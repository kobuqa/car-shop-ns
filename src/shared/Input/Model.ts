export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hintMessage?: string;
  regEx?: RegExp;
  isValid?: boolean;
  setIsValid?: React.Dispatch<React.SetStateAction<boolean>>;
}
