import styled from 'styled-components'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'

const CallAudio = ()=>{

  return <Wrapper>
    <div className="flex justify-center">
      <Avatar size={128} icon={<UserOutlined />} />
    </div>
    <div className="flex justify-center mt-6 text">Calling...</div>
    <div className="flex justify-center mt-6 text-2xl">Haui Chatbot</div>

    <div className="form-ans">
      {/*<Image src={"https://freesvg.org/img/phone-call-icon.png"} width={64} height={64} alt="aws"/>*/}
      <div className="wrapper">
        <div className="ring">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
}


const Wrapper = styled.div`
  .form-ans{
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    img,.wrapper{
      position: fixed;
      bottom: 0px;
    }
    
    .ring{
      cursor: pointer;
      border: 0!important;
      box-shadow: none;
    }
  }
  padding: 24px 0;
  height: 100vh;
  background: rgb(235,251,0);
  background: linear-gradient(180deg, rgba(235,251,0,1) 0%, rgba(0,255,181,1) 11%, rgba(0,212,255,1) 100%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .coccoc-alo-ph-circle {
    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    position: absolute;
    background-color: transparent;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid rgba(30, 30, 30, 0.4);
    opacity: .1;
    -webkit-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
    -moz-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
    -ms-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
    -o-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
    animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }

  .coccoc-alo-phone {
    background-color: transparent;
    width: 200px;
    height: 200px;
    cursor: pointer;
    z-index: 200000 !important;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    -webkit-transition: visibility .5s;
    -moz-transition: visibility .5s;
    -o-transition: visibility .5s;
    transition: visibility .5s;
    right: 150px;
    top: 30px;
  }

  .coccoc-alo-phone.coccoc-alo-green .coccoc-alo-ph-circle-fill {
    background-color: rgba(0, 175, 242, 0.5);
    opacity: .75 !important;
  }

  .coccoc-alo-ph-circle-fill {
    width: 100px;
    height: 100px;
    top: 50px;
    left: 50px;
    position: absolute;
    background-color: #000;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid transparent;
    opacity: .1;
    -webkit-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
    -moz-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
    -ms-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
    -o-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
    animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }

  .coccoc-alo-ph-img-circle {
    width: 60px;
    height: 60px;
    top: 70px;
    left: 70px;
    position: absolute;
    background: rgba(30, 30, 30, 0.1) url(https://drive.google.com/uc?id=1V3N2b79QjDWetC_ss9wI3c-xpWDymn9R) no-repeat center center;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid transparent;
    opacity: .7;
    -webkit-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
    -moz-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
    -ms-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
    -o-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
    animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
  }

  .coccoc-alo-phone.coccoc-alo-green .coccoc-alo-ph-img-circle {
    background-color: #00aff2;
  }

  .coccoc-alo-phone.coccoc-alo-green .coccoc-alo-ph-circle {
    border-color: #00aff2;
    opacity: .5;
  }

  .coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-circle,
  .coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-circle {
    border-color: #75eb50;
    opacity: .5;
  }

  .coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-circle-fill,
  .coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-circle-fill {
    background-color: rgba(117, 235, 80, 0.5);
    opacity: .75 !important;
  }

  .coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-img-circle,
  .coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-img-circle {
    background-color: #75eb50;
  }

  @-moz-keyframes coccoc-alo-circle-anim {
    0% {
      transform: rotate(0) scale(.5) skew(1deg);
      opacity: .1
    }
    30% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .5
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .1
    }
  }

  @-webkit-keyframes coccoc-alo-circle-anim {
    0% {
      transform: rotate(0) scale(.5) skew(1deg);
      opacity: .1
    }
    30% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .5
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .1
    }
  }

  @-o-keyframes coccoc-alo-circle-anim {
    0% {
      transform: rotate(0) scale(.5) skew(1deg);
      opacity: .1
    }
    30% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .5
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .1
    }
  }

  @keyframes coccoc-alo-circle-anim {
    0% {
      transform: rotate(0) scale(.5) skew(1deg);
      opacity: .1
    }
    30% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .5
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .1
    }
  }

  @-moz-keyframes coccoc-alo-circle-fill-anim {
    0% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .2
    }
    100% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
  }

  @-webkit-keyframes coccoc-alo-circle-fill-anim {
    0% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .2
    }
    100% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
  }

  @-o-keyframes coccoc-alo-circle-fill-anim {
    0% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .2
    }
    100% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
  }

  @keyframes coccoc-alo-circle-fill-anim {
    0% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg);
      opacity: .2
    }
    100% {
      transform: rotate(0) scale(.7) skew(1deg);
      opacity: .2
    }
  }

  @-moz-keyframes coccoc-alo-circle-img-anim {
    0% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    20% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    30% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    40% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg)
    }
  }

  @-webkit-keyframes coccoc-alo-circle-img-anim {
    0% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    20% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    30% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    40% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg)
    }
  }

  @-o-keyframes coccoc-alo-circle-img-anim {
    0% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    20% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    30% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    40% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg)
    }
  }

  @keyframes coccoc-alo-circle-img-anim {
    0% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    10% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    20% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    30% {
      transform: rotate(-25deg) scale(1) skew(1deg)
    }
    40% {
      transform: rotate(25deg) scale(1) skew(1deg)
    }
    50% {
      transform: rotate(0) scale(1) skew(1deg)
    }
    100% {
      transform: rotate(0) scale(1) skew(1deg)
    }
  }
`

export default CallAudio;
