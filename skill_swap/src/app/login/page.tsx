import React from 'react'
import {Card, CardHeader, CardTitle}from "@/frontend/Components/ui/card"; 
import AuthForm from "@/frontend/Components/AuthForm";

function LoginPage() {
  return (
    <div className='flex flex-1 items-center justify-center mt-1 h-screen'>
       <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader className='mb-4'>
            <CardTitle className='text-center text-2xl font-semibold'> Login </CardTitle>
        </CardHeader>
        <AuthForm type="login" />
        </Card>
    </div>
  )
}

export default LoginPage;