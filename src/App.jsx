import StyledText from './components/StyledText'
import AlertButton from './components/AlertButton'
import './App.css'

function App() {

  return (
    <>
      <AlertButton label='Baixar CV' />
      <AlertButton />
      <AlertButton label=''/>

      <StyledText />
      <StyledText text='Texto personalizado sem uppercase' color='darkgreen' toUpperCase={false}/>
      <StyledText text='Texto personalizado com uppercase' color='#FF007F' />
    </>
  )
}

export default App