import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface IButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  margin: 9px;
  
  background-color : ${({ theme, variant }) => theme[variant]};
  color: white;
`
