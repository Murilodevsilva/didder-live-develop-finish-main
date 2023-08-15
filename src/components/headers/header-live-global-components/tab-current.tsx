import { TabItem } from 'src/components/headers/header-live-global-components/tab-item'
import { Container, TextTabCurrent } from './header-live-global'

const RenderTabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 1:
      return (
        <Container>
          <TabItem
            title="Live que talvez você goste"
            mic={false}
            iconOptions={true}
          />
        </Container>
      )
    case 2:
      return (
        <Container>
          <TabItem
            title="Audios que talvez você goste"
            mic={true}
            iconOptions={false}
          />
        </Container>
      )
    case 3:
      return (
        <Container>
          <TextTabCurrent>Conteúdo da guia 3</TextTabCurrent>
        </Container>
      )
    default:
      return null
  }
}
export default RenderTabContent
