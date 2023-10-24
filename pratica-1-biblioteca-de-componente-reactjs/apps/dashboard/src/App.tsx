import { LayoutSplitter, SplitterDirection, SplitterPanel } from "@ifba-lab3-reactjs/component-library"

function App() {
  return (
    <div style={{height:'100vh', width: '100vw'}}>
      <LayoutSplitter orientacao={SplitterDirection.Horizontal} splitterpercent={20}>

        <SplitterPanel backgroundcolor="#0d2d3b" color="#ffffff">Lateral</SplitterPanel>

        <SplitterPanel backgroundcolor="#427a92" padding="1rem" >Conteudo</SplitterPanel>
      
      </LayoutSplitter>
    </div>
  )
}

export default App
