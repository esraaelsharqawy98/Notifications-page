import "./NotificationList.css";
import NotificationItem from "../NotificationItem/NotificationItem";

function NotificationList(props) {

  return (
    <div id="notificationList">
    {
        props.notifications.map(notification => {
             return <NotificationItem key={notification.id} {...notification} toggleread={props.toggleread}/>
        })
    }
      
    </div>
  );
}

export default NotificationList;
