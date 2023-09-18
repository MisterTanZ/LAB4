var objPeople =  [
{
    username : "tharatan1711",
    password : "0838933943"
}

];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0;i < objPeople.length;i++){
        if(username == objPeople[i].username&&password == objPeople[i].password){
            console.log(username + "เก่งมากค้าบบบ คุณเข้าได้แล้ว");
            alert("เก่งมากค้าบบบ คุณเข้าได้แล้ว");
            return false;
        }
        console.log("username or password ผิดจ้าาา อดเข้าน้าาา");
        alert("username or password ผิดจ้าาา อดเข้าน้าาา");
        return false;
    }
}