var pageload = 1;
var body = document.getElementById("wrapper");
//var button = document.getElementById("switch");
function createSite(){
    switch(pageload){
        case 1:
            body.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu finibus ligula. Vestibulum at velit id turpis maximus semper in vitae ipsum. \
            Duis sollicitudin tempus molestie. Vivamus sollicitudin aliquam iaculis. Donec eget malesuada nibh, at accumsan sem. Fusce pellentesque blandit urna ac volutpat.\
            Nam non purus nulla. Nam elementum hendrerit imperdiet. Quisque eget dolor ultrices, dapibus nulla eu, condimentum ligula.\
            Sed euismod felis a tristique lobortis. Aliquam nec augue lacinia, cursus ex vitae, placerat risus.</p>';
            break;
        default:
            body.innerHTML = '<h1>DAB LIKE LATIOS</h1>';
    }
}
setTimeout(createSite, 5);