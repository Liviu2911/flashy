function Slide({ active }: { active: boolean }) {
  return (
    <div
      className={`h-1 w-12 relative z-10 rounded-full overflow-hidden`}
    >
      <div className={`z-10 relative w-12 h-1 bg-white opacity-30`} />
      <div className={`${active ? "slide-animation" : "hidden"} z-20 absolute left-0 top-0 w-12 h-1 bg-white`} />
    </div>
  );
}

export default Slide;
