export default function ThemeToggle() {
  return (
    <button
      onClick={() =>
        document.documentElement.classList.toggle("dark")
      }
      className="border px-4 py-2 rounded text-sm"
    >
      dark theme / light theme
    </button>
  );
}
