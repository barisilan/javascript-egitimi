
let userName = prompt("İsmini yaz hele")          
let myName = document.querySelector("#myName")

myName.innerHTML =`${userName}`



function zaman() {
  
    const weekday = [" Pazar", " Pazartesi", " Salı", " Çarşamba", " Perşembe", " Cuma", " Cumartesi"];
    const gun = new Date()
    let day = weekday[gun.getDay()]        // https://www.w3schools.com/jsref/jsref_getday.asp


    let date = new Date().toLocaleTimeString('tr-TR')  

   
    myClock.innerHTML = `${date + day}`   
}

setInterval(zaman, 1000) 
   

