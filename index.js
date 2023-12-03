const getDate = () => {
    const date = new Date()
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.getElementById("hr").innerText = (`0${hour}`).slice(-2);
    document.getElementById("min").innerText = (`0${minutes}`).slice(-2);
    document.getElementById("sec").innerText = (`0${seconds}`).slice(-2);
}
setInterval(getDate, 1000);

