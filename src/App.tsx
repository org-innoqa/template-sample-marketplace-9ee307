import React, { useState } from 'react';
import { Search, Star, ShoppingBag, User, Tag } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Hand-woven Basket', seller: 'Artisan Home', price: 45, category: 'Decor', img: 'https://images.unsplash.com/photo-1590674899484-d56481825d91?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Ceramic Vase', seller: 'Clay Studio', price: 85, category: 'Ceramics', img: 'https://images.unsplash.com/photo-1578749556568-bc5c40e88861?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Leather Journal', seller: 'Crafty Hands', price: 35, category: 'Stationery', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-warm-600">MakerMarket</h1>
          <div className="flex gap-6">
            <button onClick={() => setActiveTab('home')} className="hover:text-warm-600">Home</button>
            <button onClick={() => setActiveTab('shop')} className="hover:text-warm-600">Shop</button>
            <User className="cursor-pointer" />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <header className="py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Discover Unique Handmade Goods</h2>
          <div className="relative max-w-md mx-auto">
            <input type="text" placeholder="Search for products..." className="w-full p-3 rounded-full border shadow-sm pl-10" />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
          </div>
        </header>

        <section>
          <h3 className="text-2xl font-semibold mb-6">Trending Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map(p => (
              <div key={p.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
                <h4 className="font-bold text-lg">{p.name}</h4>
                <p className="text-gray-500 text-sm">by {p.seller}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-warm-600">${p.price}</span>
                  <button className="bg-warm-500 text-white px-4 py-2 rounded-full text-sm">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}