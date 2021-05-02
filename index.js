document.addEventListener("DOMContentLoaded", function() {
    // main().innerHTML
    document.querySelector("#text").innerHTML = "This is really cool!"
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );