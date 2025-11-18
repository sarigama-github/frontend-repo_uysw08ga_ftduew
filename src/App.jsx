import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [cart, setCart] = useState([])

  const cartCount = useMemo(() => cart.reduce((n, i) => n + (i.quantity || 1), 0), [cart])

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  async function checkout() {
    if (cart.length === 0) return
    const payload = {
      items: cart.map((c) => ({ product_id: c.id, quantity: c.quantity })),
      name: 'Demo Customer',
      email: 'demo@veltrax.store',
      address: '123 Future Ave, Neon City'
    }
    try {
      const res = await fetch(`${API_BASE}/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      alert(`Order placed! Total $${data.total} (Order #${data.order_id})`)
      setCart([])
    } catch (e) {
      alert('Checkout failed')
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Products onAdd={addToCart} />

      {/* Mini cart */}
      <div className="mx-auto mt-2 max-w-7xl px-6">
        {cart.length > 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/70">{cartCount} item(s) in cart</div>
              <button onClick={checkout} className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-medium text-white">Checkout</button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
