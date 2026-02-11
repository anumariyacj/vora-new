import { ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 pb-10">
      <section className="group relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-zinc-900">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: "url('/home1.png')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-2 text-[clamp(4.5rem,10vw,8rem)] font-black uppercase tracking-[-0.05em] text-white drop-shadow-[0_20px_13px_rgba(0,0,0,0.03)] drop-shadow-[0_8px_5px_rgba(0,0,0,0.08)]">
            Vora
          </h1>
          <p className="mx-auto max-w-[600px] text-[0.875rem] font-light uppercase tracking-[0.4em] text-zinc-200">
            <b>
              Luxury essentials for Men, Women, and Kids. Redefining your
              wardrobe with architectural precision.
            </b>
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-3">
        {[
          { name: 'Women', image: '/Women.jpg' },
          { name: 'Men', image: '/men.jpg' },
          { name: 'Kids', image: 'kids.jpg' },
        ].map(cat => (
          <div
            key={cat.name}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-zinc-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />
            <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-2xl font-bold uppercase italic tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {cat.name}
              </h3>
              <p className="mt-1 flex items-center gap-1 text-[0.75rem] font-medium uppercase text-zinc-100 transition-[gap] duration-200 group-hover:gap-2">
                Explore Collection <ArrowRight className="w-3 h-3" />
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-6 px-4">
        <div className="flex items-end justify-between border-b border-zinc-200 pb-4">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">
              Featured Items
            </h2>
            <p className="text-zinc-500 text-sm">
              Our most loved pieces this week.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Kid Bag', price: '$240', img: '/kbag3.png' },
            { title: 'Minimalist Watch', price: '$180', img: '/watch1.png' },
            { title: 'Frock', price: '$120', img: '/wcloth.png' },
            { title: 'Classic Sneakers', price: '$95', img: '/mshoe.png' },
          ].map((product, i) => (
            <div key={i} className="group space-y-3">
              <div className="aspect-[1/1] bg-zinc-100 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.img}')` }}
                />
              </div>
              <div className="pt-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold uppercase text-xs tracking-tight truncate max-w-[70%] pl-2">
                    {product.title}
                  </h4>
                  <p className="text-zinc-900 text-xs font-bold pr-2">
                    {product.price}
                  </p>
                </div>
                <div className="flex gap-0.5 mt-2 pl-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
