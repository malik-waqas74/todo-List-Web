
module.exports = getDate;


function getDate(){

    
    var options={
        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric"

    }

    const d = new Date();
    var today = d.toLocaleDateString("en-US",options);

    return today;

}