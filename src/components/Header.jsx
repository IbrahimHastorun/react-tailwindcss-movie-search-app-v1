const Header = ({ setMovieName }) => {

    return (
        <header className="bg-white text-gray-700 rounded-lg p-5 shadow-2xl mb-5">
            <div className="flex items-center justify-between p-3 border-b border-gray-800">
                <h1 className="text-3xl text-gray-500">Movie Search App</h1>
                <p className="text-xl">Version : 1.0</p>
            </div>

            <form className="p-3 mt-3">
                <span className="text-sm text-red-800">Please Search Foreign Movies by Foreign Name</span>
                <div className="flex items-center mt-2">
                    <label className="basis-3/12 text-xl" htmlFor="movies">Movie name :</label>
                    <input onChange={(e) => { setMovieName(e.target.value.trim()) }} className="border-b border-indigo-800 outline-none basis-11/12 px-1" type="text" id="movies" placeholder="Movie name" />
                </div>
            </form>
        </header>
    )
}

export default Header