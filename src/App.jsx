import { useState } from 'react'
import './App.css'
import NotificationHeader from './Components/NotificationHeader/NotificationHeader'
import NotificationList from './Components/NotificationList/NotificationList'
function App() {
  const [notifications , setNotifications] = useState(
    [
      {
        id: 1,
        username: "Mark Webber",
        userimg: "/images/avatar-mark-webber.webp",
        action: "reacted to your recent post",
        actionfor: {
          post: "My first tournament today!",
          group: "",
          picture: "",
          privatemessage: ""
        },
        timestamp: "1m ago",
        isread: false,
      },
      {
        id: 2,
        username: "Angela Gray ",
        userimg: "/images/avatar-angela-gray.webp",
        action: "followed you",
        actionfor: {
          post: "",
          group: "",
          picture: "",
          privatemessage: ""
        },
        timestamp: "5m ago",
        isread: false,
      },
      {
        id: 3,
        username: "Jacob Thompson",
        userimg: "/images/avatar-jacob-thompson.webp",
        action: "has joined your group",
        actionfor: {
          post: "",
          group: "Chess Club",
          picture: "",
          privatemessage: ""
        },
        timestamp: "1 day ago",
        isread: false,
      },
      {
        id: 4,
        username: "Rizky Hasanuddin",
        userimg: "/images/avatar-rizky-hasanuddin.webp",
        action: "sent you a private message",
        actionfor: {
          post: "",
          group: "",
          picture: "",
          privatemessage:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        },
        timestamp: "5 days ago",
        isread: true,
      },
      {
        id: 5,
        username: "Kimberly Smith",
        userimg: "/images/avatar-kimberly-smith.webp",
        action: "commented on your picture",
        actionfor: {
          post: "",
          group: "",
          picture: "/images/image-chess.webp",
          privatemessage: ""
        },
        timestamp: "1 week ago",
        isread: true,
      },
      {
        id: 6,
        username: "Nathan Peterson",
        userimg: "/images/avatar-nathan-peterson.webp",
        action: "reacted to your recent post",
        actionfor: {
          post: "5 end-game strategies to increase your win rate",
          group: "",
          picture: "",
          privatemessage: ""
        },
        timestamp: "2 weeks ago",
        isread: true,
      },
      {
        id: 7,
        username: "Anna Kim",
        userimg: "/images/avatar-anna-kim.webp",
        action: "left the group",
        actionfor: {
          post: "",
          group: "Chess Club",
          picture: "",
          privatemessage: ""
        },
        timestamp: "2 weeks ago",
        isread: true,
      }
    ]
  )

  function markAllRead() {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      isread: true,
    }));
    setNotifications(updatedNotifications);
  }

  function toggleRead(id){
    const updatedNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, isread: !notification.isread } : notification
    );
    setNotifications(updatedNotifications);
  }

  const countUnread = () =>  notifications.filter(notification => !notification.isread).length;
  
  return (
   <main>
       <NotificationHeader  markallread={markAllRead} countunread={countUnread}/>
       <NotificationList notifications = {notifications} toggleread={toggleRead} />
   </main>
  )
}

export default App
