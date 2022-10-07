function addNumber(operation) {
    document.getElementById('numbers').textContent += operation;
}
function clearNumbers() {
    document.getElementById('numbers').textContent = '';
}
function loginPassword() {
    if(document.getElementById('numbers').textContent == '111-222-333') {
        document.getElementById('main').innerHTML = `
        <div>
        <center style="margin-top: 3vh;"><h1>Redericting...</h1></center>
    </div>
        `
        document.getElementById('numbers').setAttribute("class", "invisible")
        setTimeout(function(){
            window.location="https://youtu.be/xvFZjo5PgG0"
        },1500)
    } else {
        document.getElementById('incorrect-message').innerHTML = `
            Incorrect Password!
        `
        document.getElementById('numbers').textContent = '';
        setTimeout(function(){
            document.getElementById("incorrect-message").innerHTML="";
            },1500);
    }
}