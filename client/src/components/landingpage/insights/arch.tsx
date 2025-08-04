function Arch() {
  return (
    <div className="relative w-full">
      <div className="w-full h-24 overflow-hidden flex absolute justify-center">
        <div className="w-[3200px] h-[1800px] absolute rounded-t-full bg-black border border-white z-20" />
        <div className="relative z-30 bg-gradient-to-r from-black to-transparent w-36 h-36" />
        <div className="relative ml-[820px] z-30 bg-gradient-to-r from-transparent to-black w-36 h-36" />
      </div>

      <div className="flex justify-center absolute top-10 w-full z-10">
        <div className="w-96 h-96 rounded-full insights-shadow bg-white" />
        <div className="bg-black w-[700px] h-[900px] absolute top-12 z-30" />
      </div>
    </div>
  )
}

export default Arch;
