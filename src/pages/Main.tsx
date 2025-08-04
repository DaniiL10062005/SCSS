import { Content, Header, Footer } from './components'
import '@/styles/main.scss'

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
