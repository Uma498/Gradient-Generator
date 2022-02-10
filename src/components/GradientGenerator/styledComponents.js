import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionsDescription = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.5;
`

export const GradientDirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 450px;
  }
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`

export const ColorInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 600px;
  min-width: 30px;
  border: none;
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 25px;
  margin-bottom: 12px;
  margin-left: 12px;
  outline: none;
  cursor: pointer;
`
