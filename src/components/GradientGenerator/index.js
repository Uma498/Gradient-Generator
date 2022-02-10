import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionsList,
  ColorsPickersDescription,
  ColorPickerContainer,
  ColorInputAndColorContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b `,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state

    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>

          <DirectionsDescription>Choose Direction</DirectionsDescription>

          <GradientDirectionsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                isActive={activeGradientDirection === eachDirection.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </GradientDirectionsList>

          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>

          <ColorPickerContainer>
            <ColorInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <ColorInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </ColorInputAndColorContainer>
            <ColorInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <ColorInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </ColorInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
