import CollaborativeRoom from '@/components/CollaborativeRoom'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const Documents = () => {
  return (
    <div>
      <CollaborativeRoom />
    </div>
  )
}

export default Documents