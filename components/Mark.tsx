export default function Mark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 1 L22 5.5 V13 C22 19.5 17.8 24.8 12 27 C6.2 24.8 2 19.5 2 13 V5.5 L12 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
