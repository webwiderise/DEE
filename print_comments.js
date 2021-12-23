function printComments(data) {  


    //Find current date
    let currDate = new Date();

    let currDateObj = {
        months: currDate.getMonth() + 1,
        days: currDate.getDate(),
        hours: currDate.getHours(),
        mins: currDate.getMinutes(),
}

    for (let i = 0; i < data.length; i++) {

        //Assinging the username and comment strings to variables
        let userNameText = data[i].username;
        let commentText = data[i].body;

        //Assinging the time the comment was posted object, and passing it to the calculator function
        let dateObject = data[i].time;
        dateDifference(dateObject, currDateObj);

        //String of timelapse since comment was posted, calculated in date_difference.js adn time_since.js
        let dateText = timeSinceString[i];

        //Create each comment elements
        let commentTitle = document.createElement("div");
        let userName = document.createElement("p");
        let dateElement = document.createElement("p");
        let commentDiv = document.createElement("p");
        let lineBreak = document.createElement("br");

        //Attach the class name to the elements
        commentTitle.className = "comment_title";
        userName.className = "username";
        dateElement.className = "comment_time";
        commentDiv.className = "comment_content";


        //Link json data to a variable
        let usernameContent = document.createTextNode(userNameText);
        let dateContent = document.createTextNode(dateText);
        let commentContent = document.createTextNode(commentText);

        //Attach json variable to element
        userName.appendChild(usernameContent);
        dateElement.appendChild(dateContent);
        commentDiv.appendChild(commentContent);

        //Attach username and date to comment title div
        commentTitle.appendChild(userName);
        commentTitle.appendChild(dateElement);

        //Attach newly created elemnent to container div
        commenttitle = document.getElementById("commentContainer").appendChild(commentTitle);
        comment = document.getElementById("commentContainer").appendChild(commentDiv);
        linebreak = document.getElementById("commentContainer").appendChild(lineBreak);
    }
}