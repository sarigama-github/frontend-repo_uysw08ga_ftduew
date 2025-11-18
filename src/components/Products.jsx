import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Products({ onAdd }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          // Try seeding once
          await fetch(`${API_BASE}/seed`, { method: 'POST' });
          const res2 = await fetch(`${API_BASE}/products`);
          const data2 = await res2.json();
          setItems(data2);
        } else {
          setItems(data);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="py-20 text-center text-white/60">Loading products…</div>;
  if (error) return <div className="py-20 text-center text-red-300">{error}</div>;

  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">Featured products</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p, idx) => (
          <motion.div
            key={p.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0e1f] via-transparent/40 to-transparent opacity-80" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white/90">{p.title}</h3>
                <span className="text-violet-300">${p.price.toFixed(2)}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-white/60">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => onAdd(p)} className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-700/20 transition hover:scale-[1.02]">Add to cart</button>
                <div className="text-xs text-white/50">⭐ {p.rating?.toFixed?.(1) ?? '4.8'}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
