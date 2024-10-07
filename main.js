//hexcode
HexCode.addEventListener('keypress', HexCode_keypress);
HexCode.addEventListener('input', function()
{
  this.value = this.value.toUpperCase();
  let hex_code = this.value.replace("#", "");
  hex_code = hex_code.toUpperCase();
  if(hex_code.length==6)
  {
    let rgb_value = Hex_to_RGB(hex_code).split(' ');
    set_rgb_value(rgb_value);
    let cmyk_value = RGB_to_CMYK(rgb[0].value, rgb[1].value, rgb[2].value).split(' ');
    set_cmyk_value(cmyk_value);
    let hsl_value = RGB_to_HSL(rgb[0].value, rgb[1].value, rgb[2].value).split(' ');
    set_hsl_value(hsl_value);
  }
})
//rgb
for(var i = 0; i< rgb.length; i++)
{
    rgb[i].addEventListener('keypress', allowOnlyNumber);
    rgb[i].addEventListener('input', function(){
    var check=1;
    for(var i=0; i<rgb.length; i++) if(rgb[i].value=="")
    {
      check = 0;
      break;
    }
    if(check==1)
    {
      let hex_value = RGB_to_Hex(rgb[0].value, rgb[1].value, rgb[2].value);
      HexCode.value = hex_value;
      let cmyk_value = RGB_to_CMYK(rgb[0].value, rgb[1].value, rgb[2].value).split(' ');
      set_cmyk_value(cmyk_value);
      let hsl_value = RGB_to_HSL(rgb[0].value, rgb[1].value, rgb[2].value).split(' ');
      set_hsl_value(hsl_value);
    }
  });
}
//cmyk
for(var i=0; i< cmyk.length; i++)
{
    cmyk[i].addEventListener('keypress', allowDecimalNumber)
    cmyk[i].addEventListener('input', function(){
      var check=1;
      for(var i = 0; i<cmyk.length; i++) if(cmyk[i].value=="") 
      {
        check = 0;
        break;
      }
      if(check==1)
      {
        let rgb_value = CMYK_to_RGB(cmyk[0].value, cmyk[1].value, cmyk[2].value, cmyk[3].value);
        set_rgb_value(rgb_value);
        let hex_code = RGB_to_Hex(rgb[0], rgb[1], rgb[2]);
        HexCode.value = hex_code;
        let hsl_value = RGB_to_HSL(rgb[0], rgb[1], rgb[2]);
        set_hsl_value(hsl_value);
      }
    })
}
//hsl
for(var i=0; i< hsl.length; i++)
{
    hsl[i].addEventListener('keypress', allowDecimalNumber);
    hsl[i].addEventListener('input', function(){
      var check=1;
      for (var i = 0; i<hsl.length; i++) if(hsl[i].value=="")
      {
        check=0; break;
      }
      if(check==1)
      {
        let rgb_value = HSL_to_RGB(hsl[0].value, hsl[1].value, hsl[2].value)
        set_rgb_value(rgb_value);
        let hex_code = RGB_to_Hex(rgb[0], rgb[1], rgb[2]);
        HexCode.value = hex_code;
        let cmyk_value = RGB_to_CMYK(rgb[0].value, rgb[1].value, rgb[2].value).split(' ');
        set_cmyk_value(cmyk_value);
      }
    })
}