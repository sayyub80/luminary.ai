import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function Home() {
  const user = await currentUser();
  console.log("hello");
  console.log(user?.firstName);
  return (
   
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home

