export default function Contacts() {
  return (
    <div className="mt-20 text-white font-mono px-10 text-center">
      <h1 className="text-2xl mb-5">Contact Me</h1>
      <p className="text-zinc-400 mb-3">
        Let's work together! Reach out on any platform.
      </p>
      <div className="flex justify-center gap-5">
        <a
          href="mailto:ishangupta3121@gmail.com"
          className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ishan-gupta-5b0a20293/  "
          className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ishan-crd"
          className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
