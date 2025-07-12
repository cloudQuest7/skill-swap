"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Link, Loader2 } from 'lucide-react';
import { loginAction, signUpAction } from '@/lib/actions/auth-actions';

type Props = {
  type: 'login' | 'signup';
}

function AuthForm({type}:Props) {
    const isLoginForm = type === 'login';
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        startTransition(async () => {
          try {
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            
            const response = isLoginForm 
              ? await loginAction(email, password)
              : await signUpAction(email, password);

            if (response.errorMessage) {
              toast.error(response.errorMessage);
              return;
            }

            if (response.success) {
              if (isLoginForm) {
                toast.success("Welcome back! Successfully logged in.");
              } else {
                toast.success("Account created! Please check your email for confirmation.");
              }
              router.push("/");
            }
          } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
          }
        });
    };
  return (
    <form onSubmit={handleSubmit}>
        <CardContent className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                disabled={isPending}
                />
            </div>

            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='password'>Password</Label>
                <Input
                id="password"
                name='password'
                placeholder="Enter your password"
                type='password'
                required
                disabled={isPending}
                minLength={8}
                />
            </div>
        </CardContent>
        <CardFooter className='mt-4 flex flex-col gap-6'>
            <Button className='w-full'>
                {isPending ? <Loader2 className="animate-spin" /> : isLoginForm ? "Login" : "Sign Up"}
            </Button>
            <p className='text-xs'>
                {isLoginForm ? "Don't have an account? " : "Already have an account? "}
                <a
                    href={isLoginForm ? "/sign-up" : "/login"}
                    className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
                >
                    {isLoginForm ? "Sign Up" : "Login"}
                </a>
            </p>
        </CardFooter>
    </form>
  )
}

export default AuthForm;
