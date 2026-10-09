import './Header.css'

function Header() {
  return (
    <>
      <header className='pk-header'>
        <img src="/images/logo/pionjar-logo-lq.webp" className='logo'/>
        <nav className='header-menu'>
          <ul>
            <li className='menu-item'>
              <a href="#">Vad vi gör</a>
              <nav className='submenu'>
                <ul>
                  <li>
                    <a href="#">Gudstjänster</a>
                  </li>
                  <li>
                    <a href="#">Barnkyrkan</a>
                  </li>
                  <li>
                    <a href="#">Hemgrupper</a>
                  </li>
                  <li>
                    <a href="#">Unga vuxna</a>
                  </li>
                  <li>
                    <a href="#">LIT</a>
                  </li>
                </ul>
              </nav>
            </li>
            <li className='menu-item'>
              <a href="#">Om oss</a>
            </li>
            <li className='menu-item'>
              <a href="#">Kalender</a>
            </li>
            <li className='menu-item'>
              <a href="#">Kontakt</a>
            </li>
            <li className='menu-item'>
              <a href="#">Engagemang</a>
            </li>
            <li className='menu-item'>
              <a href="#">Ny besökare</a>
            </li>
            <li className='menu-item'>
              <a href="#">Givande</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
