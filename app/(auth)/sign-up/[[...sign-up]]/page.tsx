import { Signup } from '@clerk/nextjs'
import React from 'react'

const SignupPage = () => {
    return (
        <main className='auth-page'>
            <Signup />
        </main>
    )
}

export default SignupPage