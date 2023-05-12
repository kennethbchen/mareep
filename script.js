const countSpan = document.getElementById("loop-count")
const startTime = Date.now()

setInterval( _ => {
    
    let elapsed = (Date.now() - startTime) / 1000; // Seconds
    countSpan.innerHTML = Math.floor(elapsed);

}, 1000)