import {createContext, useState, useCallback} from 'react';
import data from '../data/data.json';

export const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
  const [notifications, setNotifications] = useState(data);


  // para limpar todas as notificações
  // (useCallback) evita bugs e renderizações inuteis
  const clearNotifications = useCallback(() => {
    setNotifications(prevState => prevState.map(notification => {
      const updatedNotification = {
        ...notification,
        isRead: true
        // (...) copia o objeto e altera alguma propriedade/ informação
      }
      return updatedNotification
    }))
  }, [])

  return (
    <NotificationContext.Provider value={{
      notifications,
      setNotifications,
      clearNotifications
      // estrutura básica do useContext envia os valores requisitados a cima
    }}>
      {children}
      {/* para funcionar em todos os filhos */}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;