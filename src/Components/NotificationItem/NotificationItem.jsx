import "./NotificationItem.css";
function NotificationItem(props) {
  function handleToggleReadItem() {
    props.toggleread(props.id);
  }

  return (
    <div
      className={`notificationItem ${props.isread ? "read" : ""}`}
      onClick={handleToggleReadItem}
    >
      <img src={props.userimg} alt="user image" className="userImg" />
      <div className="notifyContent">
        <div className="notifyTitle">
          <div className="titleContent">
            <h4 className="userName">
              <a href="#">{props.username}</a>
            </h4>
            <span className="actionText">{props.action}</span>
            {props.actionfor.post && (
              <strong className="postLink">
                <a>{props.actionfor.post}</a>
              </strong>
            )}

            {props.actionfor.group && (
              <strong className="groupLink">
                <a href="#">{props.actionfor.group}</a>
              </strong>
            )}

            {!props.isread && <span className="dot"></span>}
          </div>
          <p className="notifyTime">{props.timestamp}</p>
          
          {props.actionfor.privatemessage && (
          <p className="message">{props.actionfor.privatemessage}</p>
        )}
        </div>
        {props.actionfor.picture && (
          <img
            src={props.actionfor.picture}
            className="actionPicture"
            alt="picture"
          />
        )}
      </div>
      
    </div>
  );
}
export default NotificationItem;
