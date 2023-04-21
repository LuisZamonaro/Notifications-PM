
import HeaderNoti from './components/HeaderNoti'
import MainNoti from './components/MainNoti'
import NotificationProvider from './context/NotificationContext'
import './styles/styles.css'

function App() {
  return (
    <div className="container">
      <NotificationProvider>
        <HeaderNoti/>
        <MainNoti/>
      </NotificationProvider>
    </div>
  )
}

export default App
