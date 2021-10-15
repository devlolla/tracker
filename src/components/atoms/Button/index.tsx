import { ButtonHTMLAttributes, ReactNode } from "react"
import tw from 'tailwind-styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost'
}

export const Button = ({ children, variant, ...props }: Props) => {
  if (variant === 'ghost') return (
    <GhostButton {...props}>
      {children}
    </GhostButton>
  )
  return (
    <MainButton {...props}>
      {children}
    </MainButton>
  )
}

export const BaseButton = tw.button`
  h-10
  px-8
  text-white 
  font-bold 
  disabled:cursor-not-allowed
  disabled:bg-gray-200
`

/* 
Usamos esse formato para extender as propriedades de um componente styled
igual quando a gente fazia com os componentes do materialUi
*/
export const MainButton = tw(BaseButton)`
  bg-purple-400
  hover:bg-purple-500

`

export const GhostButton = tw(BaseButton)`
  bg-transparent
  hover:bg-gray-50
  text-purple-500
`