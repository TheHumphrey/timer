import { HeaderContainer } from './Header.styles'

import Logo from '../../assets/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <a href="">
          <Timer size={24} />
        </a>

        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
