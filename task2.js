var volume ;
let cal=()=>{
    var radius = document.getElementById("rad").value;
radius = Math.abs(radius);
volume = ((4/3) * Math.PI * Math.pow(radius , 3 ));
volume = volume.toFixed(3);
document.getElementById("vol").value = volume; 

}