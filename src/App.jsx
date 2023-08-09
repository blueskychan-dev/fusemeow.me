function App() {
  const flexDiv = "flex items-center justify-center h-screen";
  const flexDiv_2 = "flex items-center justify-center";
  const listText =
    "p-1 border-2 rounded-lg bg-zinc-800 hover:scale-105 duration-200 hover:border-pink-200 mb-2";
  return (
    <>
      <div className={flexDiv}>
        <div className="py-2">
          <div>
            <div className={flexDiv_2 + " hover:scale-105 duration-300"}>
              <img
                src="https://placekitten.com/150/150"
                alt="Profile Picture"
                className="rounded-full w-32 h-32"
              />
            </div>

            <div className="text-3xl text-center">Hello world :3</div>
          </div>
          <div className="h-3/6 w-80 break-words p-2">
            <div className="text-lg">About me ˶ᵔ ᵕ ᵔ˶</div>

            <div className={listText}>
              My name is Phapoom Saksri (Garfield/Fuse :3)
            </div>
            <div className={listText}>
              My birthday is 17 December 2009 and age is 13
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
