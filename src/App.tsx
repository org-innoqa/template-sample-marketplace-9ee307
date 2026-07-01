import React, { useState, useEffect } from 'react';
import { Search, Store, Package } from 'lucide-react';
import { db } from './lib/db';

interface Vendor { id: number; name: string; description: string; } 
interface Product { id: number; vendor_id: number; name: string; price: number; } 

export default function App() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      const v = await db.select('vendors');
      const p = await db.select('products');
      setVendors(v);
      setProducts(p);
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Marketplace</h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input 
            className="w-full p-3 pl-10 rounded-lg border border-gray-200 shadow-sm"
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Package className="text-blue-500 mb-2" />
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-gray-600">${p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Vendors</h2>
          <div className="space-y-4">
            {vendors.map(v => (
              <div key={v.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
                <Store className="text-green-500" />
                <div>
                  <h4 className="font-bold">{v.name}</h4>
                  <p className="text-sm text-gray-500">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}