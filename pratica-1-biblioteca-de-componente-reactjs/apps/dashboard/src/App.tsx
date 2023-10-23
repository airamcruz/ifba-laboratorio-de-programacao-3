import {  LayoutSpliter } from '@ifba-lab3-reactjs/component-library'

function App() {
  return (
    <LayoutSpliter.Root backgroundColor='#ececec'>
      <LayoutSpliter.Container orientacao={LayoutSpliter.Orientacao.Horizontal}>
        <LayoutSpliter.Nav.Container>
          <LayoutSpliter.Nav.Header>
            <p>NavHeader</p>
          </LayoutSpliter.Nav.Header>
          <LayoutSpliter.Nav.Content>
            <LayoutSpliter.Nav.Item>Item 1</LayoutSpliter.Nav.Item>
            <LayoutSpliter.Nav.Item>Item 2</LayoutSpliter.Nav.Item>
            <LayoutSpliter.Nav.Item>Item 3</LayoutSpliter.Nav.Item>
          </LayoutSpliter.Nav.Content>
          <LayoutSpliter.Nav.Footer>
            <p>NavFooter</p>
          </LayoutSpliter.Nav.Footer>
        </LayoutSpliter.Nav.Container>

        <LayoutSpliter.Content>
          <LayoutSpliter.Container orientacao={LayoutSpliter.Orientacao.Vertical}>
            <LayoutSpliter.Nav.Container>
              <LayoutSpliter.Nav.Content>
                <LayoutSpliter.Nav.Item>
                  Item Do menu
                </LayoutSpliter.Nav.Item>
              </LayoutSpliter.Nav.Content>
            </LayoutSpliter.Nav.Container>
            <LayoutSpliter.Content>
              <p>Conteudo</p>
            </LayoutSpliter.Content>
          </LayoutSpliter.Container>
        </LayoutSpliter.Content>

      </LayoutSpliter.Container>
    </LayoutSpliter.Root>
  )
}

export default App
