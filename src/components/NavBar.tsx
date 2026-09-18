import { Link } from 'react-router-dom'
import { whatsapp } from './Hero'

function NavBar() {

    const NavLink = [
        {name: "casa", path: "/"},
        {name: "galeria", path: "/galeria"},
        {name: "contacto", path: "/contacto"},
    ]
  return (
    <header className='bg-studio sticky top-0 z-50 border border-b-line-dark'>
      <div className='max-w-6xl my-0 mx-auto py-1 px-7 flex items-center justify-between h-16'>
        <div>
            <Link to="/">
                <img src="/logo.jpeg" alt="Legado Essencial" className='w-10' />
            </Link>
        </div>
        <div>
            <nav className='flex gap-2 items-center'>
                {NavLink.map((l, i) => (
                    <ul key={i}>
                        <Link className='text-paper-dim text-base font-normal relative py-2 px-1 cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100' to={l.path}>{l.name}</Link>
                    </ul>
                ))}
                <Link to={whatsapp} className='bg-blue text-paper font-bold px-4 py-2 rounded-radius shadow-md transition-transform duration-200 ease-out inline-block'> Ligar agora </Link>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default NavBar
