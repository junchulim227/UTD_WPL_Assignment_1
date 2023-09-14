

document.getElementById("light").onclick = function() {
  var element = document.getElementById("s1");
  console.log(element.classList);
  element.classList.remove("dark");
  element.classList.add("sec1","sec1.d1","row");

  console.log(element.classList);
}

document.getElementById("dark").onclick = function() {
  var element = document.getElementById("s1");
  console.log(element.classList);
  //element.className='';
  console.log("ClassName: before ",element.className);
  element.classList='';
  console.log(element.classList);
  console.log("ClassName: after",element.className);
  element.classList.add("dark","row","padding");
  console.log(element.classList);
}
