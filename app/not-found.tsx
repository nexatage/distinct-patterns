import React from 'react'
import Image from "next/image"
import Link from "next/link"
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[2rem] h-[70vh] mb-[10rem]"><Image src="/assets/notfound.svg" width={500} height={500} alt="notfound-image" className=""/> <div className="font-semibold text-center">The Page you&apos;re looking for is Not found. <br/>Go Back <Link href="/"><span className="underline">Home</span> Instead</Link> </div> </div>
  )
}

export default NotFound;