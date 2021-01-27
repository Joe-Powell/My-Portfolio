


document.querySelector('h1').innerHTML = ' Joseph Powell <br>Web Developer';











// for clicking in projects in small menu
const displayNoneProjects = document.querySelector('#smallmenu .projects-btn')
displayNoneProjects.addEventListener('click', () => {
    document.getElementById('smallmenu').style.display = 'none';
})

// for clicking in contact in small menu
const displayNoneContact = document.querySelector('#smallmenu .contact-btn')
displayNoneContact.addEventListener('click', () => {
    document.getElementById('smallmenu').style.display = 'none';
})





// below will address the projects section 
//   let project = document.querySelectorAll('.row-three .project');
//   let overProj = document.querySelectorAll('.row-three .overProj');
//   let parent = document.querySelectorAll('.row-three .parent');

//   for(let i=0; i < project.length; i++) {

//       parent[i].addEventListener('mouseover', () => {
//          overProj[i].style.display='flex';
//          overProj[i].style.transition='0.7s ease-in-out';

//       });

//       parent[i].addEventListener('mouseout', () => {
//          overProj[i].style.display='none';
//       });

//       }


// day andtime
function getDays() {
    const landing = document.querySelector('.landing');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const myDate = new Date();

    const year = myDate.getFullYear();
    let month = myDate.getMonth();
    let dayOfMonth = myDate.getDate();

    const myDay = myDate.getDay();
    const time = myDate.getTime();
    let hour = myDate.getHours();  // made let for the switch ststement
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    let greeting = '';

    /// if minutes and seconds are below 10 put zero before it

    if (seconds < 10) {
        seconds = '0' + seconds;
    };


    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    month += 1;

    if (month < 10) {
        month = '0' + month;
    }

    if (dayOfMonth < 10) {
        dayOfMonth = '0' + dayOfMonth;
    }

    // give time AM and a Good morning greeting 1-12 !! Order was important
    switch (hour) {
        case 0:
            hour = 12;
            minutes = minutes + ' am';
            greeting = 'Good  morning!';
            break;
        case 1:
            hour = 1;
            minutes = minutes + ' am';
            greeting = 'Good  morning!';
            break;
        case 2:
            hour = 2;
            minutes = minutes + ' am';
            greeting = 'Good  morning!';
            break;
        case 3:
            hour = 3;
            minutes = minutes + ' am';
            greeting = 'Good  morning!';
            break;
        case 4:
            hour = 4;
            minutes = minutes + ' am';
            greeting = 'Good  morning!';
            break;
        case 5:
            hour = 5;
            minutes = minutes + ' am';
            greeting = "Good  morning!";
            break;
        case 6:
            hour = 6;
            minutes = minutes + ' am';
            greeting = "Good  morning!";
            break;
        case 7:
            hour = 7;
            minutes = minutes + ' am';
            greeting = "Good  morning!";
            break;
        case 8:
            hour = 8;
            minutes = minutes + ' am';
            greeting = "Good  morning!";
            break;
        case 9:
            hour = 9;
            minutes = minutes + ' am';
            greeting = "Good  morning!";
            break;
        case 10:
            hour = 10;
            minutes = minutes + ' am';
            greeting = "Good  morning!";
            break;
        case 11:
            hour = 11;
            minutes = minutes + ' pm';
            greeting = "Good Afternoon";
            break;
    };


    //switch statement from making hour PM + had to make the hour variable let!!! const wouldn't work!! 
    // also.. had to put 1-12 on top because am and pm would override....
    switch (hour) {
        case 12:
            hour = 12;
            minutes = minutes + ' ';
            greeting = 'Good Afternoon';
            break;
        case 13:
            hour = 1;
            minutes = minutes + ' PM';
            greeting = 'Good Afternoon';
            break;
        case 14:
            hour = 2;
            minutes = minutes + ' PM';
            greeting = 'Good Afternoon';
            break;
        case 15:
            hour = 3;
            minutes = minutes + ' PM';
            greeting = 'Good Afternoon';
            break;
        case 16:
            hour = 4;
            minutes = minutes + ' PM';
            greeting = 'Good Afternoon';
            break;
        case 17:
            hour = 5;
            minutes = minutes + ' PM';
            greeting = "Good evening";
            break;
        case 18:
            hour = 6;
            minutes = minutes + ' PM';
            greeting = "Good evening";
            break;
        case 19:
            hour = 7;
            minutes = minutes + ' PM';
            greeting = "Good evening";
            break;
        case 20:
            hour = 8;
            minutes = minutes + ' PM';
            greeting = "Good evening";
            break;
        case 21:
            hour = 9;
            minutes = minutes + ' PM';
            greeting = "Good evening";
            break;
        case 22:
            hour = 10;
            minutes = minutes + ' PM';
            greeting = "Good evening";
            break;
        case 23:
            hour = 11;
            minutes = minutes + ' AM';
            greeting = "Good evening";
            break;
    };





    /// convert 
    //landing.innerHTML = myDay;

    if (myDay == 0) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[0] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    } else if (myDay == 1) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[1] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    } else if (myDay == 2) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[2] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    } else if (myDay == 3) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[3] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    } else if (myDay == 4) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[4] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    } else if (myDay == 5) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[5] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    } else if (myDay == 6) {
        landing.innerHTML = greeting + '!' + '<br>' + 'Today is ' + days[6] + ' ' + month + '/' + dayOfMonth + '/' + year + '<br>' + 'Time is ' + hour + ':' + minutes;
    }




}
getDays();
setInterval(getDays, 1000);




// read more 
const readAll = document.querySelectorAll('.readAll');
const readLess = document.querySelectorAll('.readLess');
const readMore = document.querySelectorAll('.readMore');
const makeInline = document.querySelectorAll('.makeInline');

for (let i = 0; i < readAll.length; i++) {
    readAll[i].addEventListener('click', () => {


        readAll[i].classList.toggle('readAllToggle');
        makeInline[i].innerHTML += readMore[i].innerHTML;


    })

}






















