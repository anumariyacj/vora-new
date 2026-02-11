'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Api } from '@/components/api/crud';

type Product = {
  _id?: string;
  name: string;
  price: number;
  description: string;
};

const collection = 'products';

const ProductPage = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState<Product>({
    name: '',
    price: 0,
    description: '',
  });

  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await Api.get<Product[]>(`/${collection}`);
      return res.data;
    },
  });

  const createProduct = useMutation({
    mutationFn: async (newProduct: Product) => {
      const res = await Api.post<Product>(`/${collection}`, newProduct);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setForm({ name: '', price: 0, description: '' });
    },
    onError: error => {
      console.error('Failed to create product:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProduct.mutate(form);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-50 p-4 rounded-lg"
      >
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Product name"
          className="w-full border rounded p-2"
          required
        />

        <input
          type="number"
          value={form.price === 0 ? '' : form.price}
          onChange={e => setForm({ ...form, price: Number(e.target.value) })}
          placeholder="Product price"
          className="w-full border rounded p-2"
          required
        />

        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          placeholder="Product description"
          className="w-full border rounded p-2"
          required
        />

        <button
          type="submit"
          disabled={createProduct.isPending}
          className="bg-black text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {createProduct.isPending ? 'Creating...' : 'Create Product'}
        </button>
      </form>

      <div className="mt-8">
        {isLoading && <p>Loading products...</p>}
        {isError && <p className="text-red-500">Error loading products.</p>}

        <ul className="grid gap-4">
          {data?.map(item => (
            <li key={item._id} className="border rounded p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="text-green-600 font-mono">${item.price}</span>
              </div>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
