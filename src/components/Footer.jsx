export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-transparent to-black/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Veltrax. All rights reserved.</p>
          <div className="text-sm text-white/50">Futuristic gear for creators.</div>
        </div>
      </div>
    </footer>
  );
}
