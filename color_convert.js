function max_value(a, b, c)
{
    max = a;
    max = max>b?max:b;
    max = max>c?max:c;
    return max;
}
function hex_to_decimal(hex)
{
    var s = 0, t = 1;
    for(let i = hex.length-1; i>=0; i--)
    {
        if (hex[i]>='0'&&hex[i]<='9') s=s+parseInt(hex[i])*t;
        else if(hex[i]>='A'&&hex[i]<='F') s=s+parseInt(hex.charCodeAt(i)-55)*t;
        t*=16;
    }
    return s;
}
function decimal_to_hex(dec)
{
    dec = parseInt(dec);
    var s="";
    do
    {
        i=dec % 16;
        if(i<=9) s=i+""+s;
        else
        {
            switch(i){
                case 10: s="A"+s; break;
                case 11: s="B"+s; break;
                case 12: s="C"+s; break;
                case 13: s="D"+s; break;
                case 14: s="E"+s; break;
                case 15: s="F"+s; break;
            }
        }
        dec=parseInt(dec/16);
    } while(dec!=0);
    if(s.length==1) s="0"+s;
    return s;
}
function RGB_to_Hex(r, g, b)
{
    return "#" + decimal_to_hex(r)+decimal_to_hex(g)+decimal_to_hex(b);
}
function Hex_to_RGB(hex)
{
    var hex_value = hex.replace("#", "");
    var hex_val=[];
    for(let i = 0; i<hex_value.length; i+=2)
    {
        hex_val.push(hex_value.slice(i, i+2));
    }
    return hex_to_decimal(hex_val[0]) + " " + hex_to_decimal(hex_val[1]) + " " + hex_to_decimal(hex_val[2]);
}
function RGB_to_CMYK(r, g, b)
{
    var c, m, y, k
    var r1 = parseFloat(r)/255, g1=parseFloat(g)/255, b1=parseFloat(b)/255;
    var k = 1-max_value(r1, g1, b1);
    if(k==0) c=m=y=k;
    else
    {
        c=(1-r1-k)/(1-k);
        m=(1-g1-k)/(1-k);
        y=(1-b1-k)/(1-k);
    }
    return (c*100).toFixed()+" "+(m*100).toFixed()+" "+(y*100).toFixed()+" "+(k*100).toFixed();
}
function CMYK_to_RGB(c, m, y, k)
{
    var r, g, b;
    var c1=parseFloat(c)/100, m1=parseFloat(m)/100, y1 = parseFloat(y)/100, k1=parseFloat(k)/100;
    r = 255*(1-c1)*(1-k1);
    g = 255*(1-m1)*(1-k1);
    b = 255*(1-y1)*(1-k1);
    return r+" "+g+" "+b;
}
function RGB_to_HSL(r, g, b)
{
    var h, s, l;
    var r1 = parseFloat(r)/255, g1=parseFloat(g)/255, b1=parseFloat(b)/255;
    var cmax = Math.max(r1, g1, b1);
    var cmin = Math.min(r1, g1, b1);
    var delta = cmax-cmin;
    l = (cmax + cmin)/2;
    if(delta==0) 
    {
        s=0; h=0;
    }
    else
    {
        if(l<=0.5) s=delta/(2*l);
        else s = delta/(2-2*l);
        switch(cmax)
        {
            case r1: h=60*(((g1-b1)/delta)%6); break;
            case g1: h=60*((b1-r1)/delta+2); break;
            case b1: h=60*((r1-g1)/delta+4); break;
        }
        if (h<0) h+=360;
        return h.toFixed(1) + " " + (s*100).toFixed(2) + " " + (l*100).toFixed(2);
    }
}
function HSL_to_RGB(h, s, l)
{
    var r,g,b;
    var h1 = h/360;
    var c = (1-Math.abs(2*l-1))*s;
    var x = c*(1-Math.abs((h1/60)%2-1))
    var m = l-c/2;
    if (0<=h1&&h1<1/6){
        r=c;g=x;b=0;
    }
    else if(h1<2/6){
        r=x; g=c; b=0;
    }
    else if(h1<3/6){
        r=0; g=c; b=x;
    }
    else if(h1<4/6){
        r=0; g=x; b=c;
    }
    else if(h1<5/6){
        r=x; g=0; b=c;
    } else{
        r=c; g=0; b=x;
    }
    r=(r+m)*255;
    g=(g+m)*255;
    b=(b+m)*255;
    return r+" "+g+" "+b;
}