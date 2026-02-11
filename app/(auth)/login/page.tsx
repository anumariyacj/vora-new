'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login Attempt:', { email, password });
    router.push('/home');
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <h2 className="text-3xl font-bold uppercase tracking-tight m-0">Login</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
        <Input
          type="email"
          placeholder="Email Address"
          className="h-12 rounded-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          className="h-12 rounded-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="w-full h-12 rounded-none uppercase text-xs font-bold tracking-widest"
        >
          Sign In
        </Button>
      </form>

      <p className="text-sm text-gray-500">
        New to Vora?{' '}
        <Link href="/signup" className="text-black font-bold underline">
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
