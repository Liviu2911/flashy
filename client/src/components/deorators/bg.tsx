import type { Children } from "../../types/default";

function StoryBg({ children }: { children: Children }) {
  return (
    <div className="-z-20 text-stone-200 bg-black w-full h-[100vh] absolute left-0 top-0">
    {children}
    </div>
  )
}

export default StoryBg;
