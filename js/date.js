const DATE = document.querySelector('.date');

const date = new Date();
let month = date.getMonth() + 1;
const day = date.getDate();
let week = date.getDay();

switch(week){
    case 0 :
        week = 'Sunday';
        break;
    case 1:
        week = 'Monday';
        break;
    case 2:
        week = 'Tuesday';
        break;
    case 3:
        week = 'Wednesday';
        break;
    case 4:
        week = 'Thursday';
        break;
    case 5:
        week = 'Friday';
        break;
    case 6:
        week = 'Saturday';
        break;
    default: '';
    break;
}

switch(month){
    case 1:
        month = 'Jan';
        break; 
    case 2:
        month = 'Feb';
        break; 
    case 3:
        month = 'Mar';
        break; 
    case 4:
        month = 'Apr';
        break; 
    case 5:
        month = 'May';
        break; 
    case 6:
        month = 'Jun';
        break; 
    case 7:
        month = 'Jul';
        break; 
    case 8:
        month = 'Aug';
        break; 
    case 9:
        month = 'Sep';
        break; 
    case 10:
        month = 'Oct';
        break; 
    case 11:
        month = 'Nov';
        break; 
    case 12:
        month = 'Dec';
        break; 
    default: '';
    break;
}

const today = `${week}, ${day} ${month}`

DATE.innerText = today