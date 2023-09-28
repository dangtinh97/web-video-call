import '../../../public/css/ringing.css'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export interface RingingProps {
  action: (type: boolean) => void,
}

const Ringing = ({ action }: RingingProps) => {
  return <Wrapper>
    <div className="flex justify-center">
      <Avatar size={128} icon={<UserOutlined/>}/>
    </div>
    <div className="flex justify-center mt-6 text">Calling...</div>
    <div className="flex justify-center mt-6 text-2xl">Haui Chatbot</div>
    <div className="form-ans">
      <div className="wrapper">
        <div className="ring" onClick={() => action(true)}>
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
  .form-ans {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;

    img, .wrapper {
      position: fixed;
      bottom: 0px;
    }

    .ring {
      cursor: pointer;
      border: 0 !important;
      box-shadow: none;
    }
  }

  padding: 24px 0;
  height: 100vh;
  background: rgb(235, 251, 0);
  background: linear-gradient(180deg, rgba(235, 251, 0, 1) 0%, rgba(0, 255, 181, 1) 11%, rgba(0, 212, 255, 1) 100%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export default Ringing
