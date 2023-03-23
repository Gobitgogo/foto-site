import Header from '../components/header/Header'
import Link from 'next/link'

const Home = () => {
  return (
    <> 
      <div className=" top-0 left-0 right-0 flex h-screen max-w-7xl flex-col bg-[url('../assets/pic1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="flex w-2/5 text-center font-serif text-2xl font-bold text-white sm:text-5xl">
            Сказочная фото и видео сьемка
          </h1>
        </div>
      </div>
      <div className="mt-20 grid w-full grid-cols-1 border-stone-900 marker:border sm:grid-cols-2">
        <Link href="about">
          <div className="mb-4 flex h-screen cursor-pointer items-center justify-center bg-[url('../assets/pic2.jpg')]  bg-cover bg-center bg-no-repeat sm:row-start-1 sm:row-end-2 sm:mr-4">
            <a className="w-2/5 text-center font-serif text-2xl font-bold text-white sm:text-5xl">
              Обо мне
            </a>
          </div>
        </Link>
        <div className="mb-4 flex h-screen cursor-pointer items-center  justify-center bg-[url('../assets/pic4.jpg')] bg-cover bg-center bg-no-repeat sm:row-start-1 sm:row-end-3 sm:mb-0 sm:h-auto">
          <h1 className="w-2/5 text-center font-serif text-2xl font-bold text-white  sm:text-5xl">
            Галерея
          </h1>
        </div>
        <div className="flex h-screen cursor-pointer items-center justify-center bg-[url('../assets/pic3.jpg')]  bg-cover bg-center bg-no-repeat sm:row-start-2 sm:row-end-3 sm:mr-4">
          <h1 className="w-2/5 text-center font-serif text-2xl font-bold text-white sm:text-5xl">
            Видео
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
