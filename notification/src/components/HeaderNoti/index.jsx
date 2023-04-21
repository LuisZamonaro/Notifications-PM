import { useContext, useMemo } from "react"
import { NotificationContext } from "../../context/NotificationContext";

export default function HeaderNoti () {
    const {notifications, clearNotifications} = useContext(NotificationContext);


    // useMemo é para memorizar valor
    const notificationCounter = useMemo(() => {
        const filteredNotifications = notifications.filter(notification => notification.isRead === false)
        // ele vai filtrar todas as notificações que não foram lidas
        return filteredNotifications.length;
        // e ele vai retornar a quantidade de notif. não lidas
    }, [notifications])
    // toda vez que o notifications muda, ele vai agir para calcular


    return (
        <div className="containerNoti">
            <div className="headerNoti">
                <div className="notific">
                    Notifications
                     <span id="notifHeader">{notificationCounter}</span>
                </div>
                <div className="markAll" onClick={clearNotifications}>
                    Mark all as read
                </div>
            </div>
        </div>
    )
}