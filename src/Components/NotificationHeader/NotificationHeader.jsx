import './NotificationHeader.css'
function NotificationHeader(props){
    return(
        <div id="notificationHeader">
            <h1>
               Notifications 
               <span id='badge'>{props.countunread()}</span>
            </h1> 
           <button id='markReadLink' onClick={props.markallread}>
               Mark all as read
           </button>
        </div>
    )
}
export default NotificationHeader;
