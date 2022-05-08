import Header from '../header/Header'
import { BsVimeo, BsInstagram, BsFacebook } from 'react-icons/bs'

function Layout({ children }) {
  return (
    <div className="mx-auto my-auto max-w-7xl">
      <Header />
      {children}
      <div className="mb-4 mt-20 flex justify-center">
        <BsVimeo className="m-4 h-8 w-8" />
        <BsInstagram className="m-4 h-8 w-8" />
        <BsFacebook className="m-4 h-8 w-8" />
      </div>
    </div>
  )
}

export default Layout
