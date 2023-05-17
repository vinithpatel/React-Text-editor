import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #25262c;
`

export const Container = styled.div`
  height: 500px;
  width: 700px;

  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1b1c22;
`

export const ImgCard = styled.div`
  height: 100%;
  width: 45%;

  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;

  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const Image = styled.img`
  width: 100%;
`

export const TextCard = styled(ImgCard)`
  width: 55%;
  background-color: #25262c;

  border-radius: 10px;
`
export const StylesCard = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #334155;

  height: 35px;
`

export const Button = styled.button`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};

  background-color: transparent;
  border-width: 0px;

  font-size: 20px;
  cursor: pointer;
  outline: none;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
  color: #f8fafc;
  background-color: #25262c;
  border-width: 0px;
  outline: none;
  padding: 10px;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
`
export const ListItem = styled.li`
  margin-right: 5px;
`
