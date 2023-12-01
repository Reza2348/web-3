// var userName = prompt("لطفا نام کاربری خود را وارد کنید:");
// var passWord = prompt("لطفا رمز عبور خود را وارد کنید");
// userName = "Admin";
// passWord = 123;
// if (userName == "Admin" && passWord == "123") {
//   console.log("مدیر وارد سیستم شده");
// } else if (userName != "reza" && passWord == "s2314") {
//   console.log("کارمند وارد سیستم شد");
// }

// var Weight = Number(prompt("لطفان وزن خود را وارد کنید"));
// if (Weight <= 10 || Weight <= 30) {
//   console.log("وزن شما کم است");
// } else if (Weight <= 30 || Weight <= 50) {
//   console.log("وزن شما مناسب است");
// } else if (Weight <= 50 || Weight <= 100) {
//   console.log("وزن شما خیلی زیاد است");
// } else {
//   console.log("لطفان وزن خود را بین 0تا100 وارد کنید");
// }

var time = Number(prompt("لطفان ساعت ورود خود به شرکت را تایپ کنید"));
if (time <= 6 || time <= 10) {
  console.log("شما به موقه وارد شرکت شدید");
} else if (time <= 10 || time <= 13) {
  console.log("شما با تعقیر وارد شرکت شدیدی");
} else if (time <= 13 || time <= 15) {
  console.log("شما دیر وارد شرکت شدین");
} else {
  console.log("لطفان ساعت ورود خود را به عدد وارد کنید");
}
