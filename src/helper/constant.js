
// to create immutable object use object.freeze({}) funtion. Object properties cant change
module.exports = Object.freeze({  
    HOST:'localhost',
    USERNAME:"phpmyadmin",
    PASSWORD:"root",
    DB:'TestDB',
    EMPLYOYEE_TABLE:'EMPLOYEE',
    STUDNET_TABLE:'ATTENDANCE',
    CSV_FILE_PATH: "public/empDetails.csv"
});