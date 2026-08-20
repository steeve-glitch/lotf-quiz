export function Savage({ delay, top, duration = 1.7 }: { delay: number; top: string; duration?: number }) {
  return (
    <div
      className="absolute"
      style={{ top, left: 0, animation: `stampede-run ${duration}s linear ${delay}s 1 forwards` }}
    >
      <div
        className="relative"
        style={{ width: 30, height: 42, animation: `stampede-bob 0.28s ease-in-out ${delay}s infinite` }}
      >
        {/* dust trail */}
        <div
          className="absolute -left-7 bottom-0 h-1.5 w-9 rounded-full bg-black/25 origin-right"
          style={{ animation: `stampede-dust 0.45s ease-out ${delay}s infinite` }}
        />
        {/* head */}
        <div className="absolute left-2.5 top-0 h-3.5 w-3.5 rounded-full bg-[#1c1a17]" />
        {/* torso */}
        <div className="absolute left-2 top-3 h-5 w-2.5 rounded-sm bg-[#1c1a17] rotate-6" />
        {/* back leg */}
        <div
          className="absolute left-2.5 top-7 h-5 w-1.5 origin-top rounded-full bg-[#1c1a17]"
          style={{ animation: `stampede-leg-a 0.28s ease-in-out ${delay}s infinite` }}
        />
        {/* front leg */}
        <div
          className="absolute left-4 top-7 h-5 w-1.5 origin-top rounded-full bg-[#1c1a17]"
          style={{ animation: `stampede-leg-b 0.28s ease-in-out ${delay}s infinite` }}
        />
        {/* raised arm + spear */}
        <div className="absolute left-4 top-3 h-1 w-9 origin-left -rotate-45 rounded-full bg-[#1c1a17]" />
        <div className="absolute -left-1 top-1.5 h-2.5 w-2.5 rotate-45 bg-[#b2321e]" />
      </div>
    </div>
  );
}
