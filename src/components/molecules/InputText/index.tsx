import { InputHTMLAttributes } from "react"

/* Esse extends InputHTMLAttributes serve para que o nosso componente tenha
acesso a todos os atributos da tag input */

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <label className="flex flex-col w-full ">
      <span>{label}</span>
      <input type="text" {...props} className="border border-gray-200 h-10 px-4" />
    </label>
  )
}
