function displayDDT(day ,date, time) {
    $(document).ready(function() {
        
        switch(day) {
            case 0:
                $(".ddt").text("It's, Sunday. " + date + ", " + time);
                break;

            case 1:
                $(".ddt").text("It's, Monday. " +  date + ", " + time);
                break;

            case 2:
                $(".ddt").text("It's, Tuesday. " + date + ", " + time);
                break;

            case 3:
                $(".ddt").text("It's, Wednesday. " + date + ", " + time);
                break;

            case 4:
                $(".ddt").text("It's, Thursday. " + date + ", " + time);
                break;

            case 5:
                $(".ddt").text("It's, Friday. " + date + ", " + time);
                break;

            case 6:
                $(".ddt").text("It's, Saturday. " + date + ", " + time);
                break;

            default:
                console.log("There are only 7 days in a week!");
                break;    
        }
    });
}

export {displayDDT};