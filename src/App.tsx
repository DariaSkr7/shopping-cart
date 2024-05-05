import './App.css'
import { Header } from './Header/Header'
import { ShopingList } from './ShopingList/ShopingList'
import { ItemsProvider } from './items-hook/items-provider'

function App() {

  return (
    <ItemsProvider>
      <div className='main-page'>
        <Header />
        <ShopingList />
      </div>
    </ItemsProvider>
  )
}

export default App
