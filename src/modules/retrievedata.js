function retrieveData() {
    for(var key in localStorage) {
        console.log(key, " : ", localStorage[key]);
    }
}

export {retrieveData};