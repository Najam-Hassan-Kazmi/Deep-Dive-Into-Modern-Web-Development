const Notification = ({message, type}) => {
    
    if (message === null) { //If no message is provided, return null to hide the notification.
        return null
    }

    const notificationDesign = { // This is the default notification style inside the component definition.
        color: type,
        background: "lightgray",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    // if (type === "green") {
    //     notificationDesign.color = green
    // }

    return(
        <div className="notification" style={notificationDesign}>
            {message}
        </div>
    )
}

export default Notification