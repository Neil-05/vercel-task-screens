import Head from 'next/head'

export default function Home() {
  const images = ['task1.jpg', 'task2.jpg', 'task3.jpg', 'task4.jpg']

  return (
    <>
      <Head>
        <title>Terraform Task Screenshots</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
            Terraform Execution Snapshots
          </h1>
          <p className="text-md md:text-lg text-cyan-100 mb-10">
            Neil | Reg. No: <span className="text-white font-semibold">12215394</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {images.map((img, i) => (
              <div
                key={i}
                className="bg-blue-800 border border-cyan-400 rounded-xl shadow-lg p-3 hover:scale-105 transition-transform duration-200 w-[280px] mx-auto"
              >
                <div className="h-[180px] bg-black rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={`/${img}`}
                    alt={`task${i + 1}`}
                    className="object-contain h-full"
                  />
                </div>
                <p className="text-center mt-3 text-cyan-200 font-medium">Task {i + 1}</p>
              </div>
            ))}
          </div>

          <footer className="mt-12 text-sm text-cyan-100">
            &copy; {new Date().getFullYear()} Neil’s DevOps Project
          </footer>
        </div>
      </main>
    </>
  )
}
