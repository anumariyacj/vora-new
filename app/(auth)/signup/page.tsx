'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registering user...');

    router.push('/login');
  };

  return (
    <div className="flex w-full max-w-[400px] flex-col gap-6">
      <h2 className="m-0 text-3xl font-bold uppercase tracking-tighter">
        Join
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleRegister}>
        <Input placeholder="Full Name" className="h-12 rounded-none" required />
        <Input
          placeholder="Email Address"
          type="email"
          className="h-12 rounded-none border px-3 focus-visible:ring-black"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          className="h-12 rounded-none border px-3 focus-visible:ring-black"
          required
        />

        <Button
          type="submit"
          className="h-12 w-full rounded-none bg-black text-[0.75rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-zinc-800"
        >
          Register
        </Button>
      </form>

      <p className="text-center text-sm text-[#71717a]">
        Already a member?{' '}
        <Link
          href="/login"
          className="font-bold text-black underline underline-offset-4"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
