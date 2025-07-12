import React from 'react'
import {Card, CardHeader, CardTitle}from "@/frontend/Components/ui/card"; 
import AuthForm from "@/frontend/Components/AuthForm";

function SignUpPage() {
  return (
    <div className='flex flex-1 items-center justify-center mt-2 h-screen'>
       <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader className='mb-4'>
            <CardTitle className='text-center text-xl'> Sign Up </CardTitle>
        </CardHeader>
        <AuthForm type="signup" />
        </Card>
       
    </div>
  )
}

export default SignUpPage;