import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='bg-slate-200'>
        <header>
            <Navbar />
        </header>
        <body style={{ width: '100%', margin: 'auto', display: 'flex', flexDirection: 'column', gap: 100}} className='' >
            <Outlet />
        </body>
    </main>
  )
}

export default Layout
