interface Props {
  className?: string;
  size?: number;
}

export default function ArchMotif({ className, size = 120 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        d="M51 210 L82 101 C90 65 107 43 128 43 C149 43 166 65 174 101 L205 210 H163 L152 168 H104 L93 210 Z M101 162 V109 C101 79 112 61 128 61 C144 61 155 79 155 109 V162 Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <rect x="104" y="162" width="48" height="6" rx="3" fill="currentColor" />
      <rect x="111" y="88" width="15" height="15" rx="5.5" fill="currentColor" />
      <rect x="130" y="88" width="15" height="15" rx="5.5" fill="currentColor" />
      <rect x="111" y="107" width="15" height="15" rx="5.5" fill="currentColor" />
      <rect x="130" y="107" width="15" height="15" rx="5.5" fill="currentColor" />
    </svg>
  );
}
