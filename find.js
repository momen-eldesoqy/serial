var arr = {"6s plus 128": "355728079022106", "6S plus 128": "35860807556626", "11 Pro 64": "353867102024416",
"xs max 64":"357281099513157" , "series 5": "FHLZ76PKMLTQ" , "iphone 11 128 ":"356565105357323" , "6s Plus 128":"353300075475878",
"xs 64":"357227090512011","ipad air 1":"GCGVV2HKHP61","11 pRo 256":"353235103699000","11 pro 256":"353237100557835",
"11 Pro 256":"353244103778764","ipad pro":"DMPXF76HKD86", "7 Plus 128":"359469086484809","7 plus 128":"355352087550899",
"6s 32":"353224102949806","6s plUs 128":"355731078769727", "8 plus 64":"358627092267911", "XS max 64":"357294091516185",
"xs max 256":"357324096331965","xs max":"353132100122955","8 Plus 64":"354836097614415","Iphone 11 64":"353971100097737",
"iphone 11 64 ":"356554102048390","Iphone 11 128":"353988103456959","11 pRo 64":"353886102089120","xs Max":"357306090566373",
"11 pro max 64":"353899102649462","11 PrO 64":"353845105140314","XS max 256":"357273097473911","iphoNe 11 128":"352613115444810",
"ipHone 11 128":"353987100296145","iPhonE 11 128":"354112724705848","6s pluS 128":"358608075366219","xr 128":"357353097981734",
"xs 256":"353160101106834","8 plus 256":"356737085773767","fird 2x pro":"867865040126847","S20 Ultra":"354900110122358",
"infinx s5pro":"355288110908672","a71":"35263111176400301","samsung note9":"3524551036978","A71":"352631111326795",
"x9 2019":"86516504210762","p40":"863725044226403","p30 pro":"868120043223863","z filp 256":"355618110080645",
"oppo a5s 32":"865686041306259","y7prime 2019":"867037046189977","samsung note 10 lite":"35504511326351701",
"tab t2":"862234053533784","A_71":"352631114513514","samsung note 9":"35944395051149","p30 lite":"869438042135980",
"mi note 8":"866481043110589","oppo a52":"860354041165416","oppo a15":"861711055188437","z fold2":"354156124653926",
"honor 4x":"866959022400451","samsung note 8":"35738010107076601","honor 9x pro":"863019042618674"
}; 

var input = document.getElementById("serial");
var btn = document.getElementById("btn");
var type = document.getElementById("type");
var alert = document.getElementById("alert");
var not = document.getElementById("not");

btn.onclick = function(){
    for(key in arr)
    {
        if(arr[key]==input.value)
        {
            type.innerText = key;
            alert.innerText = " هذا الموبايل مسروق و ملك الشيخ شريف حسين للتواصل 01098830005 , 01000490193 , 01067989434 " ;
            break;
        }else{
            not.innerText = "غير مطابق";
            console.log("ok")
        }
    }
}
