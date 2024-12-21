let userName = prompt("Kullanıcı adı giriniz:");

// console.log(info);

function kullanici() {
  let info = document.querySelector("#name");
  info.innerHTML = `${userName[0].toLocaleUpperCase()}${userName
    .slice(1)
    .toLocaleLowerCase()}`;
}
console.log(kullanici());

function date() {
  let time = new Date().toLocaleString("tr-TR");
  document.querySelector("#zaman").innerHTML = time;
}
setInterval(date, 1000);
