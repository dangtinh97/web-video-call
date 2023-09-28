'use client'

import styled from 'styled-components'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useState } from 'react'

const Calling = ()=>{

  const [text, setText] = useState<String>("Calling...")

  return (<Wrapper>
    <div className="flex justify-center">
      <Avatar size={128} icon={<UserOutlined />} />
    </div>
    <div className="flex justify-center mt-6 text">{text}</div>
    <div className="flex justify-center mt-6 text-2xl">Haui Chatbot</div>
    <div className="form-ans">
      <div className="bottom"></div>
      <div className="btn-end-call">
        <Image onClick={()=>{
          setText("Ending...")
        }} width={44} height={44} src="/images/end-call.png" alt="end-call"/>
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
      opacity: 90%;
      width: 80%;
      background: #171717;
      height: 66px;
      border-radius: 60px;
    }

    .btn-end-call {
      cursor: pointer;
      display: flex;
      align-items: center;
      position: absolute;
      height: 100%;
      width: 100%;

      img {
        position: absolute;
        display: flex;
        right: 12%;
      }
    }

    //.ring{
    //  cursor: pointer;
    //  border: 0!important;
    //  box-shadow: none;
    //}
  }
`

export default Calling;
