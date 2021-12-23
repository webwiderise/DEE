//global array
var timeSinceString = [];

function timeSince(props) {

    if (props.months > 1) {
        timeSinceString.push(props.months + " months ago");
    } else if (props.months == 1) {
        timeSinceString.push("1 month ago");
    } else if (props.days > 1) {
        timeSinceString.push(props.days + " days ago");
    } else if (props.days == 1) {
        timeSinceString.push("1 day ago");
    } else if (props.hours > 1) {
        timeSinceString.push(props.hours + " hours ago");
    } else if (props.hours == 1) {
        timeSinceString.push("1 hour ago");
    } else if (props.mins > 1) {
        timeSinceString.push(props.mins + " mins ago");
    } else {
        timeSinceString.push("just now");
    }
}