async function startCamera() {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        const video = document.getElementById("video");
        video.srcObject = stream;

    } catch (error){
        console.log("camera access denied or error: ", error);
        alert("could not access camera");
    }
}