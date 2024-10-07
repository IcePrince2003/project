let HexCode = document.getElementById('hex-value');
let rgb = document.getElementsByClassName('rgb-color');
let hsl = document.getElementsByClassName('hsl-color');
let cmyk = document.getElementsByClassName('cmyk-color');
function HexCode_keypress(event)
{
    if(event.key==' ') event.preventDefault();
    if(event.key=='#'&&HexCode.value.length!=0) event.preventDefault();
    else
    {
        let value = HexCode.value+event.key;
        value = value.replace('#', '');
        if(value.length>6) event.preventDefault();
    }
}
function allowOnlyNumber(event)
{
    if(event.key<'0'||event.key>'9') event.preventDefault();
}

function allowDecimalNumber(event)
{
    if((event.key<'0'||event.key>'9')&&event.key!='.') event.preventDefault();
    if(event.key=='.'&&this.value.includes(".")) event.preventDefault();
}

function limit_value(event)
{
    let input = event.target;
    let max_value = parseInt(input.getAttribute('max'));
    let value = parseInt(input.value + event.key);
    if(value>max_value) event.preventDefault();
}
for(var i = 0; i<rgb.length; i++) rgb[i].addEventListener('keypress', limit_value);
for(var i = 0; i<hsl.length; i++) hsl[i].addEventListener('keypress', limit_value);
for(var i = 0; i<cmyk.length; i++) cmyk[i].addEventListener('keypress', limit_value);