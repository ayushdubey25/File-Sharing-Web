import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Files() {
  return (
    <div>
      Files
      <SignedOut>
            <SignInButton />
          </SignedOut> 
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  )
}

export default Files
