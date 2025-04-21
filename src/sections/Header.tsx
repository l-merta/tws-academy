import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <img src="/images/logo_amp.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to={'/#o-nas'}>O nás</Link></li>
          <li><Link to={'/#kurzy'}>Kurzy</Link></li>
          <li><Link to={'/#recenze'}>Recenze</Link></li>
          <li><Link to={'/#kontakt'}>Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
