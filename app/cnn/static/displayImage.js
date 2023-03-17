function img1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image1').attr('src', e.target.result);
            $('#image1').show();
        }
        reader.readAsDataURL(input.files[0]);
    }
}
function img2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image2').attr('src', e.target.result);
            $('#image2').show();
        }
        reader.readAsDataURL(input.files[0]);
    }
}