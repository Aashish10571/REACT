function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-2xl flex flex-col gap-8 justify-center items-center bg-slate-300 px-8 py-8 rounded-lg">
            <h1 className="text-4xl text-gray-700 font-bold">
                Hello World
            </h1>
            <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in dolor quia, sunt numquam doloremque    sed officia mollitia at inventore optio blanditiis modi, quam incidunt odio commodi soluta. Ut, quibusdam.
            </p>
            <button className="bg-blue-400 text-white font-bold px-10 py-2 rounded-full hover:bg-blue-600">
                Press Me
            </button>
        </div>
    </div>
  )
}

export default App
