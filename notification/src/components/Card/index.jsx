import * as S from './styles';
import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';

export default function Card({ photo, nameP, action, about, aboutGroup, isRead, time, message, picture, id }) {
    const {setNotifications} = useContext(NotificationContext)

    function handleRead() {
        setNotifications(prevNotifications => prevNotifications.map(notification => {
            // Itera sobre cada notificação verificando se o ID dela é igual ao do componente que foi clicado
            // se for igual, cria um objeto clonado a partir do original, modificando o isRead pra true e retornando 
            // pra substituir o original
            // Se nao for o clicado, retorna o objeto intacto
            if (notification.id === id) {
                const updatedNotification = {
                    ...notification,
                    isRead: true
                }
                return updatedNotification
            }
            return notification;
        }))
    }

    return (
        <S.ContainerCard isRead={!isRead} onClick={handleRead}>
            <div className="wrapperCard">
                <S.InfoTop>
                    <div className="profilePhoto">
                        <img src={photo} className="photoP" />
                    </div>
                    <div className="infosNotific">
                    <span className="nameCard"> {nameP}</span>
                    <span className="actionCard"> {action}</span>
                    <span className="aboutCard"> {about}</span> <span className='aboutGroup'>{aboutGroup}</span> {isRead}
                    </div>
                    <div className="redPoint"></div>
                </S.InfoTop>
                <div className="infoBot">
                    <div className="timeMessage">
                    <p className="timeCard">{time}</p>
                    </div>
                    <div className="privateMessage">
                        {
                            message && (
                                <p id="privateMessage">{message}</p>
                            )
                        }
                    </div>
                </div>
               

            </div>
            <div className="picture">
                {
                    picture && (
                        <img className="imgKimb" src={picture}/>
                    )
                }
            </div>
        </S.ContainerCard>
    )
}