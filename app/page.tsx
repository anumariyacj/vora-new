import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import vora from '../public/vora2.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-white text-black text-center p-4">
      <div className="transition-opacity duration-500 ease-in-out hover:opacity-80">
        <Image src={vora} width={300} height={300} alt="Vora Logo" priority />
      </div>
      <h1 className="text-2xl font-extrabold tracking-widest uppercase m-0">
        WEAR THE PEACE YOU SEEK
      </h1>

      <div className="flex gap-4 font-mono uppercase tracking-[0.2em] text-sm">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Join</Link>
        </Button>
      </div>
    </div>
  );
}
