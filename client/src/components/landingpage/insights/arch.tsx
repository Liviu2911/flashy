function Arch() {
  return (
    <div className="relative w-full scale-50 sm:scale-100">
      <div className="w-full h-24 overflow-hidden flex absolute justify-center">
        <div className="w-[3200px] h-[1800px] absolute rounded-t-full bg-black border border-white z-20" />
        <div className="relative z-40 flex flex-row sm:gap-0 gap-36 justify-evenly">
          <div className="relative z-40 bg-gradient-to-r from-black to-transparent w-48 h-36" />
          <div className="sm:ml-[720px] relative z-40 bg-gradient-to-r from-transparent to-black w-48 h-36" />
        </div>
      </div>

      <div className="flex justify-center absolute top-10 w-full z-10">
        <div className="w-96 h-96 rounded-full sm-insights-shadow bg-white" />
        <div className="bg-black w-[700px] h-[400px] absolute top-12 z-30" />
      </div>
    </div>
  )
}

export default Arch;
