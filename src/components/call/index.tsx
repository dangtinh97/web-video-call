import Ringing from '@/components/call/ringing'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CallAudio = ()=>{

  const router = useRouter();
  useEffect(()=>{
    console.log("useEffect")

    const res = fetch('https://api-videocall.locamos.com/api/config', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds,
      method:"GET"
    })

    res.then(async (res)=>{
      console.log(await res.json())
    })

  },[])
  return <Ringing action={(res:boolean)=>{
    router.push("/incall")
  }}/>
}




export default CallAudio;
