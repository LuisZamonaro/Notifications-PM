import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';


import Card from "../Card";

export default function MainNoti () {
    const {notifications} = useContext(NotificationContext);
    return (
        <div className="containerMainNoti">
            <div className="wrapperMainNoti">
                {
                    notifications.map(notification => (
                        // para renderizar todos (mais prático)
                        <Card
                        key={notification.id}
                        id={notification.id}
                        photo={notification.photo}
                        nameP={notification.name}
                        action={notification.action}
                        about={notification.about}
                        aboutGroup={notification.aboutGroup}
                        isRead={notification.isRead}
                        time={notification.time}
                        message={notification.message}
                        picture={notification.picture}/>
                    ))
                }
            </div>
        </div>
    )
}