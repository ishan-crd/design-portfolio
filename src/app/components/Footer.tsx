export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-800">
      <div className="text-center">
        <p className="text-zinc-500 text-sm">Built with 💙 by Ishan Gupta</p>
        <p className="text-zinc-600 text-xs mt-2">
          © {new Date().getFullYear()} Ishan Gupta. Made with Next.js & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
}
