var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 50 ;
block_img_height =100 ;
var player_object = "" ;
var block_object = "" ;

function new_image(get_image) {
    fabric.Image.fromURL(get_image , function(IMG){
        block_object = IMG ;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object) ;
    });
}


window.addEventListener("keydown" , myKeyDown);
function myKeyDown(e) {
    keypress = e.keyCode ;
    if(e.shiftKey == true && keypress == '80') {
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keypress == '77') {
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(keypress == '38'){
        up();
    }
    if(keypress == '40'){
        down();
    }
    if(keypress == '37'){
        left();
    }
    if(keypress == '39'){
        right();
    }
    if(keypress == '49'){
        new_image('fuel4.png'); 
    }
    if(keypress == '50'){
        new_image('AERODYNAMIC NOSE CONE _ WHITE.png'); 
    }
    if(keypress == '51'){
        new_image('hawk.png'); 
    }
    if(keypress == ''){
        new_image('vertical Separator.svg'); 
    }
    if(keypress == '52'){
        new_image('Capsule Module White.png'); 
    }
    if(keypress == '53'){
        new_image('side separator.svg'); 
    }
        if(keypress == '90'){
        canvas.remove(block_object); 
    }
}


    function drp() {
        if(document.getElementById('drpdwn').value == 'battery') {
            new_image('battery.svg');
        }
    if(document.getElementById('drpdwn').value == 'Hawk Engine') {
        new_image('hawk.png');
    }
    if(document.getElementById('drpdwn').value == 'cft9') {
        new_image('fuel4.png');
    }
    if(document.getElementById('drpdwn').value == 'hga') {
        new_image('HGA.svg');
    }
    if(document.getElementById('drpdwn').value == 'Solar Panel') {
        new_image('Solar Panel.png');
    }
    if(document.getElementById('drpdwn').value == 'MGA') {
        new_image('mga.svg');
    }
    if(document.getElementById('drpdwn').value == 'solarstand') {
        new_image('Solar Panel stand.svg');
    }
}
download_img = function(el) { 
    var rocketname = window.prompt("Satellite Name:");
    document.getElementById("download").download = rocketname + ".jpg";
    var image = canvas.toDataURL("image/jpg"); el.href = image; 
};
function addLOGO() {
    new_image(document.getElementById("logoURL").value);
    document.getElementById("logoURL").value = "";
}