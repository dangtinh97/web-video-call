'use client'

import styled from 'styled-components'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const InCall = ()=>{
  const [time, setTime] = useState<number>(0)
  useEffect(()=>{
    setTimeout(()=>{
      setTime(time + 1)
    },1000)
  },[time])


  const getTextSecond = (time:number)=>{
    let minute = Math.floor(time/60).toString()
    if(parseInt(minute)<10){
      minute = `0${minute}`
    }
    let second = (time - parseInt(minute)*60).toString();
    if(parseInt(second)<10){
      second = `0${second}`
    }

    return `${minute}:${second}`

  }

  return (<Wrapper>
    <div className="flex justify-center">
      <Avatar size={128} icon={<UserOutlined />} />
    </div>
    <div className="flex justify-center mt-6 text">{getTextSecond(time)}</div>
    <div className="flex justify-center mt-6 text-2xl">Haui Chatbot</div>
    <div className="form-ans">
      <div className="bottom"></div>
      <div className="btn-end-call">
        <Image onClick={()=>{

        }} width={64} height={64} src="/images/end-call.png" alt="end-call"/>
      </div>
    </div>
  </Wrapper>)
}


const Wrapper = styled.div`
  padding: 24px 0;
  height: 100vh;
  background-image: url("https://i.pinimg.com/originals/e2/8c/37/e28c371f59e5d2e667c9ae2a44a8e172.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  width: 100%;

  .form-ans {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 24px;

    .bottom {
    }

    .btn-end-call {
      cursor: pointer;
    }

    //.ring{
    //  cursor: pointer;
    //  border: 0!important;
    //  box-shadow: none;
    //}
  }
`

export default InCall;
