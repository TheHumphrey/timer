import { ButtonHTMLAttributes } from "react"

import { ButtonContainer, ButtonVariant } from "./Button.styles"


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = ({ variant = 'primary', ...rest }: IButtonProps) => {
  return (
    <ButtonContainer variant={variant} {...rest}>
      Enviar
    </ButtonContainer>
  )
}