// might have to add on document load here
const overlay = document.querySelector("#overlay");
overlay.classList.add("inactive");

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    // firstDateofNextMonth = new Date(currYear, currMonth+1, 1).getDate(); // getting last date of previous month
    
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive" >${lastDateofLastMonth - i + 1}</li>`;
        // liTag += `<li class="inactive" id = '${lastDateofLastMonth.getMonth()}'>${lastDateofLastMonth - i + 1}</li>`;
        
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
        // liTag += `<li class="${isToday}" id = '${currMonth}'>${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        // liTag += `<li class="inactive" id = '${firstDateofNextMonth.getMonth()}'>${i - lastDayofMonth + 1}</li>`
    
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

var dateCircle = document.querySelectorAll(".days li");

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
        dateCircle = document.querySelectorAll(".days li");

        dateCircle.forEach(day => {
            day.addEventListener("click", function() {
                console.log("clicked");
                try{
                    popup.classList.remove("nofade");
                }
                catch{
                    // do nothing
                } 
                try{
                    overlay.classList.remove("inactive");
                }
                catch{
                    // do nothing
                } 
        
                // set the CSS for the popup and overlay to active and set their layer to front
                overlay.classList.add("active");
                overlay.style.zIndex = "999";
        
                popup.classList.add("nofade");
                popup.style.zIndex = "9999";

                // console.log(document.getElementById(day).id);
        
                let dateString = `Your meals for ${months[currMonth]} ${day.innerHTML}, ${currYear}`;
                document.querySelector("#datestring").innerHTML = dateString;
            })
        })
    });
});

// date popup window
const popup = document.querySelector(".date-popup");

dateCircle.forEach(day => {
    day.addEventListener("click", function() {
        console.log("clicked");
        try{
            popup.classList.remove("nofade");
        }
        catch{
            // do nothing
        } 
        try{
            overlay.classList.remove("inactive");
        }
        catch{
            // do nothing
        } 

        // set the CSS for the popup and overlay to active and set their layer to front
        overlay.classList.add("active");
        overlay.style.zIndex = "999";

        popup.classList.add("nofade");
        popup.style.zIndex = "9999";

        // console.log(document.getElementById(day).id);

        let dateString = `Your meals for ${months[currMonth]} ${day.innerHTML}, ${currYear}`;
        document.querySelector("#datestring").innerHTML = dateString;
    })
})

// overlay exit popup functionality
overlay.addEventListener('click', function(){
    popupOff();
})

// back button functionality
const backButton = document.querySelector("#close");
backButton.addEventListener("click", function() {
    popupOff();
})

function popupOff(){
    // remove the 'active' css style 
    popup.classList.remove("nofade");
    popup.classList.add("fade");
    overlay.classList.remove("active");
    overlay.classList.add("inactive");
}

function getRecipes() {
    $.ajax({
        processData: false, 
        async: true,
        'url': './includes/get-recipe.php', 
        'type': 'POST',
        'success': function(res) {
            console.log("SUCCESS");
            res = JSON.parse(res);
            console.log(res);
            console.log('number of recipes', res['recipes'].length);

            const container = document.querySelector('.recipe-list');

            for (let i = 0; i < res['recipes'].length; i++) {
                let div = document.createElement('div');
                let recipe = res['recipes'][i];
                console.log(recipe);
                console.log(recipe.recipeTitle);
                console.log(recipe['recipeTitle']);

                // let redirect = `./guest-recipe.php?id=${recipe.recipeId}`;
                
                // todo: css for hovering the thing: add a backgroiund, an onlcick and a hover
                // make the edges pink too
                // todo: downsize image
                //         dont downsize just size it until it the row is full
                //         i dont think we can check if it is full 
                let html = `
                <div class="col-6 col-12-small">
                    <div class="planned-meal">

                        

                        <input type="checkbox" id="${recipe.recipeTitle}">
                        <label for="${recipe.recipeTitle}">${recipe.recipeTitle}</label>

                        


                        <span class="image fit"><img src="${recipe.recipeImage}" alt="" /></span>
                        
                    </div>
                </div>`
                div.innerHTML = html;
                // localStorage.setItem(recipe.id, JSON.stringify(recipe));
                while (div.children.length > 0) {
                    container.appendChild(div.children[0]);
                }
            }
        },
        'error': function(res) {
            console.log("ERROR");
            console.log(res);
        }
    });
}

getRecipes()