const countSpan = document.getElementById("loop-count")
const startTime = Date.now()

setInterval( _ => {
    // Seconds
    let elapsed = (Date.now() - startTime) / 1000;
    console.log(elapsed);
    countSpan.innerHTML = Math.floor(elapsed);

}, 1000)