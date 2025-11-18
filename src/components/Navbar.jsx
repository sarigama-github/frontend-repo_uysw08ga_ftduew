import { ShoppingCart, Menu, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
              <Menu size={18} />
            </button>
            <span className="bg-gradient-to-r from-violet-300 via-white to-blue-300 bg-clip-text text-lg font-semibold text-transparent">Veltrax</span>
          </div>

          <div className="hidden max-w-md flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/70 backdrop-blur sm:flex">
            <Search size={16} className="text-white/50" />
            <input placeholder="Search premium gear" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
          </div>

          <button className="relative rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-1 text-[10px] font-semibold text-white">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
