const tbl = document.getElementById("table");
const pwr = document.getElementById("power");
const seq = document.getElementById("sequence");
const OE = document.getElementById("odd-even");
const print = document.getElementById("print");
const prin = document.getElementById("prin")
const pri = document.getElementById("pri")
const pr = document.getElementById("pr")


tbl.addEventListener("click" , () => {
    let prin ;
    let num = +(prompt("Enter a Number"));
    if (num) {
      let output = "";
      for (let i = 1; i <= 10; i++) {
          let result = num * i;
        output += `${num} x ${i} = ${result} <br>`;
         prin= print.innerHTML=output;
      }

    } else {
        prin = print.innerHTML = " You Have Entered Wrong Input "

    }
  });


  pwr.addEventListener("click", (e) => {
    let print ;
 let base = +(prompt("Enter Base "));
  if (base) {
   let power = +(prompt("Enter Power"));
    if (power) {
        let output ;
        let result = Math.pow(base, power);
       output = (`If base is ${base} & power is ${power} then result of  ${base} ^ ${power} is ${result} `)
      print = prin.innerHTML= output;
    } 
    else {
        print = print.innerHTML = " You Have Entered Wrong Input "
    }
  } else {
    print = print.innerHTML = " You Have Entered Wrong Input "
  }
});




seq.addEventListener("click", (e) => {
    let print ;
    const sequ = parseInt(prompt("Enter Limit"));
    if (sequ) {
      let output="" ;
      for (let i = 0; i <= sequ; i++) {
        output += `${i} ${i !==sequ ? "," : ""}`;
        print = pri.innerHTML= output;
      }
    }
     else {
        print = pri.innerHTML = " You Have Entered Wrong Input "
    }
  });
  

OE.addEventListener("click", (e) => {
    let print ;
  const input = prompt(" Press 'E or e ' for Even or 'O or o ' for odd");
  if (input === "E" || "e"){
      let output = "";
      for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
          output += `${i} ${i !==20 ? "," : ""}`;
          //var a = output.length-1;
          print = pr.innerHTML = output ; 
          //pr.length - 1 ;
        }
    }
  }
  else if (input === "O" || "o"){
    let output = "";
    for (let i = 0; i <= 20; i++) {
      if (i % 2 !== 0) {
        output += `${i} ${i !==sequ ? "," : ""}`;
        print = pr.innerHTML = output ; 
      }
  }
  }
  else{
    print = pr.innerHTML = "Wrong Input";   
  }
});
