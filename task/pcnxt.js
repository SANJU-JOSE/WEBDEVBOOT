var imageUrls = ['download.png','fb.png','wts.jfif','twitter.jfif'];

    var imageShownIndex = 0;

    var canvas = document.getElementById('image_canvas');
    var canvasContext = canvas.getContext('2d');

    function goToPreviousImage() {
        imageShownIndex = (imageShownIndex==0) ? imageUrls.length-1 : imageShownIndex-1;
        updateImage();
     };

    function goToNextImage() {
      imageShownIndex = (imageShownIndex == imageUrls.length-1) ? 0 : imageShownIndex+1;
      updateImage();
     };
    
    updateImage();

    function updateImage() {

      var img = new Image();
      img.src = imageUrls[imageShownIndex];

      canvasContext.clearRect(0, 0, 100, 100);

      img.onload = function() {
        canvasContext.drawImage(img, 0, 0);
      }

    }