let color= 'hsl(0,100%,50%)';
let hsl = color.split('').filter(l=>l.match(/[^hsl()$% ]/g)).join('').split(',').map(n=>+n);
console.log(hsl);

function hls2rgb (hue, saturation, lightness) {   
    if (hue == undefined){
        return [0,0,0];
    }
    var chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation;
    var huePrime = hue / 60;
    var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));
    huePrime = Math.floor(huePrime);
    var red;
    var green;
    var blue;
    if (huePrime===0){
        red =chroma;
        green = secondComponent;
        blue = 0;
    }else if (huePrime===1){
        red = secondComponent;
        green = chroma;
        blue = 0;
    }else if (huePrime===2){
        red = 0;
        green = chroma;
        blue = secondComponent;
    }else if (huePrime===3){
        red = 0;
        green = secondComponent;
        blue = chroma;
    }else if (huePrime===4){
        red = secondComponent;
        green = 0;
        blue = chroma;
    }else if (huePrime===5){
        red = chroma;
        green = 0;
        blue = secondComponent;
    }
    var lightnessAdjustment = lightness - (chroma / 2);
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;
    return [
        Math.round(red * 255), 
        Math.round(green * 255), 
        Math.round(blue * 255)
    ];
}
let [r,g,b]=hls2rgb(...hsl);

console.log(r,g,b);

// let palabra='paraguas';
// let letras=palabra.split('a');
// console.log(letras);
