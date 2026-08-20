export function SavageIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      {/* mohawk */}
      <path d="M12 5 L13 1 L14.5 5 M15.5 4 L16.5 0 L17.5 4 M18.5 5 L19.5 2 L20.5 5"
        stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* head */}
      <circle cx="16" cy="8.5" r="3.6" fill="white" />
      {/* torso */}
      <line x1="16" y1="12" x2="16" y2="21" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      {/* legs, planted apart */}
      <line x1="16" y1="21" x2="10.5" y2="30" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="16" y1="21" x2="21.5" y2="30" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      {/* resting arm */}
      <line x1="16" y1="14.5" x2="9" y2="18.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      {/* raised arm + spear */}
      <line x1="16" y1="14.5" x2="24" y2="7" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="20.5" y1="10.5" x2="30" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 1 L27.3 1.6 L29.4 3.7 Z" fill="white" />
    </svg>
  );
}
