import { Star } from 'lucide-react';

export const ProductSelection = ({ children }) => (
  <section className="flex flex-col gap-6 px-4 py-8">{children}</section>
);

export const Title = ({ label, subtitle }) => (
  <div className="flex items-end justify-between border-b border-zinc-200 pb-4">
    <div>
      <h2 className="m-0 text-[1.875rem] font-bold uppercase tracking-[-0.05em] leading-tight text-zinc-950">
        {label}
      </h2>
      <p className="text-sm text-zinc-500">{subtitle}</p>
    </div>
  </div>
);

export const ProductList = ({ products }) => (
  <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
    {products.map((product, i) => (
      <div key={i} className="group flex cursor-pointer flex-col gap-3">
        <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100">
          <img
            src={product.img}
            alt={product.title}
            className="block h-auto w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="pt-2 px-2">
          <div className="flex items-start justify-between">
            <h4 className="max-w-[70%] truncate text-[0.75rem] font-bold uppercase tracking-tight">
              {product.title}
            </h4>
            <p className="text-[0.75rem] font-bold text-zinc-900">
              {product.price}
            </p>
          </div>
          <div className="mt-2 flex gap-0.5">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} size={12} className="fill-black text-black" />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);
