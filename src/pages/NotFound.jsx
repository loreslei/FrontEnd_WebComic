import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    
    <>
    <main className="grid h-screen place-items-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Se Lascou
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            O que tu tá procurando não tá aqui seu curioso
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              class="bg-linear-to-r from-blue-400 to-violet-400 text-zinc-950 text-2xl font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-indigo-300/20 hover:translate-y-1.5 transition-all 1s"
            >
              Retornar <span class="material-symbols-outlined translate-y-1">home</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
