const host = "http://" + window.location.host + "/";

document.querySelector("#btn").addEventListener("click", function() {
    let videoUrl = document.querySelector("#videoUrl").value;
    window.open(host + "download?videoURL=" + videoUrl);
});