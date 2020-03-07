function displayGreetings(time, name) {
    $(document).ready(function() {
        
        if(time >= 0 && time < 12) {
            $(".greeting").text("good morning, " + name);
        }

        else if(time >= 12 && time <= 16) {
            $(".greeting").text("good afternoon, " + name);
        }

        else if(time >= 16 && time <= 24) {
            $(".greeting").text("good evening, " + name);
        }
    });
}

export {displayGreetings};