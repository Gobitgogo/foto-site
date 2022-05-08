import Humburger from '../humburger/Humburger'
import Link from 'next/link'

function Header() {
  return (
    <div className=" right-0 flex w-full items-center justify-between whitespace-nowrap bg-zinc-200 pl-3 pt-5 font-bold text-black sm:pt-0">
      <Link href="/">
        <h1 className="mb-5 cursor-pointer text-2xl sm:mb-0 sm:ml-0">
          SMILE EMOTION
        </h1>
      </Link>
      <nav>
        <div className="text-md hidden cursor-pointer p-5 text-black sm:block">
          <Link href="about">
            <a className="mx-5 inline-block cursor-pointer hover:text-red-700">
              Обо мне
            </a>
          </Link>
          <Link href="about">
            <a className="mx-5 inline-block cursor-pointer hover:text-red-700">
              Галерея
            </a>
          </Link>
          <Link href="about">
            <a className="mx-5 inline-block cursor-pointer hover:text-red-700">
              Видео
            </a>
          </Link>
          <Link href="about">
            <a className="mx-5 inline-block cursor-pointer hover:text-red-700">
              Контакты
            </a>
          </Link>
        </div>
        <Humburger>
          <Link href="about">
            <a className="my-1 block cursor-pointer text-gray-400 hover:text-white">
              Обо мне
            </a>
          </Link>
          <Link href="/">
            <a className="my-1 block cursor-pointer text-gray-400 hover:text-white">
              Галерея
            </a>
          </Link>
          <Link href="/">
            <a className="my-1 block cursor-pointer text-gray-400 hover:text-white">
              Видео
            </a>
          </Link>
          <Link href="/">
            <a className="my-1 block cursor-pointer text-gray-400 hover:text-white">
              Контакты
            </a>
          </Link>
        </Humburger>
      </nav>
    </div>
  )
}

export default Header
