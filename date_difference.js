function dateDifference(props, currDate) {

    //Object with properties of the current date of when the comment was posted
    let commentObj = {
        months: props.month,
        days: props.day,
        hours: props.hour,
        mins: props.min,
    }

    //Calculating the time difference between comment posting date and current date
    let timeSinceObj = {
        months: currDate.months - commentObj.months,
        days: currDate.days - commentObj.days,
        hours: currDate.hours - commentObj.hours,
        mins: currDate.mins - commentObj.mins
    }

    //call the function which will return time since posted in the appropriate form
    timeSince(timeSinceObj);
}