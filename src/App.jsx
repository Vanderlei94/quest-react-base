import ParagraphFormatter from './components/textFormatter/textFormatter'
import Button from './components/button/button'
import './App.css'

function App() {

  return (
    <>
      <Button label='Baixar CV' />
      <Button />
      <Button label=''/>

      <ParagraphFormatter />
      <ParagraphFormatter text='Texto personalizado sem uppercase' color='darkgreen' toUpperCase={false}/>
      <ParagraphFormatter text='Texto personalizado com uppercase' color='#FF007F' />
    </>
  )
}

export default App