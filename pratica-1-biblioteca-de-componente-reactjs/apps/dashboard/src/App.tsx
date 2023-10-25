import { Checkbox, CheckboxGroup, LayoutSplitter, SplitterDirection, SplitterPanel } from "@ifba-lab3-reactjs/component-library"

function App() {
  return (
    <div style={{height:'100vh', width: '100vw'}}>
      <LayoutSplitter orientacao={SplitterDirection.Horizontal} splitterpercent={20}>

        <SplitterPanel backgroundcolor="#0d2d3b" color="#ffffff">Lateral</SplitterPanel>

        <SplitterPanel backgroundcolor="#427a92" padding="1rem" >

          <div>
            <p> Checkbox</p>
            <Checkbox label="Sera que funcionou ?" />
            <Checkbox label="Tomara que tenha funcionado" fontsize="2rem" name="checkcomname" />
            <Checkbox label="Ultimo Teste" fontsize="24px" />
          </div>

          <div style={{width:'500px'}}>
            <p> CheckboxGroup</p>
            <CheckboxGroup titulo="Meu componente Checkbox" elementos={[
              {descricao: 'Item 1', name: 'comname'},
              {descricao: 'Item 2'},
              {descricao: 'Item 3'},
              {descricao: 'Item 4'},
              {descricao: 'Item 5'},
              {descricao: 'Item 6'},
            ]} />
          </div>

          <div style={{width:'800px'}}>
            <p> CheckboxGroup 2Rem</p>
            <CheckboxGroup titulo="Meu componente Checkbox" fontsize="2rem" elementos={[
              {descricao: 'Item 1', name: 'comname2'},
              {descricao: 'Item 2'},
              {descricao: 'Item 3'},
              {descricao: 'Item 4'},
              {descricao: 'Item 5'},
              {descricao: 'Item 6'},
            ]} />
          </div>
          
        </SplitterPanel>
      
      </LayoutSplitter>
    </div>
  )
}

export default App
