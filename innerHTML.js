var pageload = 1;
var body = null;
var button = null;
var cssLink = null;
//var button = document.getElementById("switch");
function createSite(){
    body = document.getElementById("wrapper");
    button = document.getElementById("switch");
    button.addEventListener('click',reload,false);
    switchPage();
    return body;
}
function reload(){
    pageload = Math.round(Math.random() * 3);
    switchPage();
}
function switchPage(){
    cssLink = document.getElementById('link');
    switch(pageload){
        case 1:
            body.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu finibus ligula. Vestibulum at velit id turpis maximus semper in vitae ipsum. \
            Duis sollicitudin tempus molestie. Vivamus sollicitudin aliquam iaculis. Donec eget malesuada nibh, at accumsan sem. Fusce pellentesque blandit urna ac volutpat.\
            Nam non purus nulla. Nam elementum hendrerit imperdiet. Quisque eget dolor ultrices, dapibus nulla eu, condimentum ligula.\
            Sed euismod felis a tristique lobortis. Aliquam nec augue lacinia, cursus ex vitae, placerat risus.</p>';
            cssLink.setAttribute("href"," ");
        break;
            
        case 2:
            cssLink.setAttribute("href","pokefusionlink.css");
            body.innerHTML = '<h1>Welcome to Pokemon Fusion Link!</h1>\
        <h2>Your go-to website for hilarious Pokemon fusions.</h2>\
        <br><br><br><br><br><br><br>\
        <div><a href="http://pokefusion.japeal.com/463/186/384">Polilicky</a>\
        <a href="http://pokefusion.japeal.com/384/150/384">Mewquaza</a>\
        <a href="http://pokefusion.japeal.com/32/252/295">Male Treeran</a>\
        <a href="http://pokefusion.japeal.com/211/423/282">Gastrofish</a>\
        <a href="http://pokefusion.japeal.com/473/96/111">Drowswine</a>\
        <a href="http://pokefusion.japeal.com/311/360/125">Wysle</a>\
        <a href="http://pokefusion.japeal.com/342/118/354">Golddaunt</a>\
        <a href="http://pokefusion.japeal.com/467/38/139">Ninemortar</a>\
        <a href="http://pokefusion.japeal.com/383/282/0">Gardedon</a>\
        <a href="http://pokefusion.japeal.com/282/154/0">Megadevoir</a>\
        <a href="http://pokefusion.japeal.com/282/25/0">Pikadevoir</a>\
        <a href="">Gardeloon</a>\
        <a href="">Forreloon</a>\
        <a href="http://pokefusion.japeal.com/423/71/74">Victreerodon</a>\
        <a href="http://pokefusion.japeal.com/363/71/74">Victreepheal</a>\
        <a href="http://pokefusion.japeal.com/384/332/70">Cacquaza</a>\
        <p>Mr. Bro</p></div>\
        <button><a class="home" href="">Pokemon Fansites<br> Home</a></button><br>';
        break;

        default:
            cssLink.setAttribute("href"," ");
            body.innerHTML = '<h1>DAB LIKE LATIOS</h1>';
    }
}
setTimeout(createSite, 5);