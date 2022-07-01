import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Modal = styled.div`
  width: 600px;
  height: 510px;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 5px 5px 4px 2px rgba(0,0,0,0.60);

  @media screen and (max-width: 610px){
    max-width: 330px;
    height: 420px;
  }
`

export const ProfileModal = styled.div`
  padding: 1em;
  max-width: 350px;
  width: 350px;
  text-align: center;
  border-radius: 10px;
  -webkit-box-shadow: 1px 5px 11px -2px #919191; 
  box-shadow: 1px 5px 11px -2px #919191;
  position: fixed;
  top: 0.6%;
  right: 0.7%;
  background: #FFFFFF;
  z-index: 1;

  @media screen and (max-width : 720px){
    top: 8.5%;
    width: 350px;
    right: 3.8%;
  }
`;


export const SettingsSpace = styled.div`
  margin: 5% auto;
  width: 90%;
  height: .1px;
  background: rgba(0,0,0,0.40);
`

export const ProfileAction = styled.button`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 0;
  gap: 0.5em;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 5px 4px -4px #919191;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(104%);
    background: rgba(0,0,0,0.1);
  }
`

export const ProfileActionText = styled.p`
  color: rgba(0,0,0,0.65);
  font-size: 1em;
`

export const ProfileCardButton = styled.button`
  min-width: 250px;
  width: 300px;
  padding: 1.1em 2em;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.65);
  box-shadow: rgb(0 0 0 / 44%) 0px 2px 2px 0px, rgb(0 0 0 / 44%) 0px 0px 1px 0px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.4) ;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0.5em 0;
  transition: ease 0.25s;
  display: flex;
 gap: 0.5em;
 align-items: center;
 justify-content: center;

  &:hover{
    color: rgba(0,0,0,0.65);
    padding: 1.1em 2.1em;
  }

  @media screen and (max-width : 600px ) {
    width: 100%;
    padding: 1em 0.5em;
    font-size: 12px;
    
  }
`

export const ProfileInfoContent = styled.div`
  width: 100%;
  height: 35vh;
  border-radius: 5px;
  background: rgb(255,255,255);
  box-shadow: -1px 5px 7px -2px #919191;
`