function login(){
    document.getElementById("message").innerHTML =
    "❌ Invalid Credentials";
}

let clicks = 0;

document.getElementById("logo").addEventListener("click",function(){

clicks++;

if(clicks===5){

alert("Developer Mode Enabled!");

console.log("Encoded Flag:");

console.log("Q29uZ3JhdHVsYXRpb25zICEgWW91IFN1Y2Nlc3NmdWxseSBMb2dnZWQgSW4=");

}

});