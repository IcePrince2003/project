function set_cmyk_value(cmyk_value)
{
    for(var i = 0; i<cmyk.length; i++) cmyk[i].value = cmyk_value[i];
}
function set_rgb_value(rgb_value)
{   
    for(var i = 0; i<rgb_value.length; i++) rgb[i].value = rgb_value[i];
    document.body.style.backgroundColor='rgb('+rgb_value[0]+','+rgb_value[1]+','+rgb_value[2]+')';
}
function set_hsl_value(hsl_value)
{
    for(var i = 0; i<hsl_value.length; i++) hsl[i].value = hsl_value[i];
}