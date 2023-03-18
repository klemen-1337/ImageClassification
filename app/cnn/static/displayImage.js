document.addEventListener("DOMContentLoaded", function() {
    var imageField1 = document.querySelector('#image-field-1');
    var image1 = document.querySelector('#image1');
    
    imageField1.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          image1.setAttribute('src', e.target.result);
          image1.style.display = 'block';
        }
        reader.readAsDataURL(this.files[0]);
      }
    });
  
    var imageField2 = document.querySelector('#image-field-2');
    var image2 = document.querySelector('#image2');
  
    imageField2.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          image2.setAttribute('src', e.target.result);
          image2.style.display = 'block';
        }
        reader.readAsDataURL(this.files[0]);
      }
    });
  });