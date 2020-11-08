const footer = document.querySelector('.footer');
footer.addEventListener('click', function(e){
    //take data-key value in agen-selection
    const dataKey = e.target.getAttribute('data-key');
    //take video elemen
    const video = document.querySelector('video');
    // console.log(video.firstElementChild);
    video.firstElementChild.setAttribute('src',`./video/${dataKey}.webm`);
    video.load();

})