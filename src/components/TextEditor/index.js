import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  Container,
  ImgCard,
  Heading,
  Image,
  TextCard,
  StylesCard,
  Button,
  TextArea,
  ListItem,
} from './StyledComponents'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
    inputValue: '',
  }

  toggleBold = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  onChangeValue = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
      inputValue,
    } = this.state
    return (
      <BgContainer>
        <Container>
          <ImgCard>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt=" text editor"
            />
          </ImgCard>
          <TextCard>
            <StylesCard>
              <ListItem>
                <Button
                  type="button"
                  isActive={isBoldActive}
                  onClick={this.toggleBold}
                  data-testid="bold"
                >
                  <VscBold />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  isActive={isItalicActive}
                  onClick={this.toggleItalic}
                  data-testid="italic"
                >
                  <GoItalic />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  isActive={isUnderlineActive}
                  onClick={this.toggleUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </Button>
              </ListItem>
            </StylesCard>
            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              value={inputValue}
              onChange={this.onChangeValue}
            />
          </TextCard>
        </Container>
      </BgContainer>
    )
  }
}

export default TextEditor
