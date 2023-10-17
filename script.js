function show_clock(){
    let h = document.getElementsByClassName("hr")[0]
    let m = document.getElementsByClassName("mn")[0]
    let s = document.getElementsByClassName("ss")[0]
  
  
    let date = new Date();
  
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    h.style.transform = `rotate(${30 *hours + minute/2}deg)`
    m.style.transform = `rotate(${6 * minute}deg)`
    s.style.transform = `rotate(${6 *second}deg)`
  
    let sound = new Audio('sound.mp3');
     sound.play("sound.mp3.mp3");
  }
  
  setInterval(show_clock, 1000);