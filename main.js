/*Create a horoscope app where the user can enter their birthday and 
get their horoscope. There should be minimum 12 unique horoscopes.*/


const horoscope={
    Aries: 'The Ram', Taurus: 'The Bull', Gemini: 'The Twins', Cancer:'The Crab', Leo: 'The Lion', Virgo: 'The Virgin', 
    Libra:'The Scales', Scorpio:'The Scorpion', Sagittarius:'The Archer',
    Capricorn:'The Goat', Aquarius: 'The Water-bearer', Pisces:'The Fish'
};
document.getElementById('go').addEventListener('click', () =>{
    const input=document.getElementById('birthday').value
    if (!input){
        alert('Please enter your birthday');
        return;

    }
    const [, mnth, dy]=input.split('-');
    const month= Number(mnth);
    const day=Number(dy);

    const sign=horoscopeFromBirthday(month, day);
    const message=horoscope[sign];

    const result=document.getElementById('result');
    const signel=document.getElementById('result-sign');
    const msgel=document.getElementById('result-message')

    // Write plain text to the DOM (no HTML strings)
    signel.textContent = sign;
    msgel.textContent = message;
   
 

});


function horoscopeFromBirthday(month, day){
    const mdy= month*100 + day;
    
    if (mdy>=321 && mdy<=419)
        return 'Aries';
    if (mdy>=420 && mdy<=520)
        return 'Taurus';
    if (mdy>=521 && mdy<=620)
        return 'Gemini';
    if (mdy>=621 && mdy<=722)
        return 'Cancer';
    if (mdy>=723 && mdy<=822)
        return 'Leo';
    if (mdy>=823 && mdy<=922)
        return 'Virgo';
    if (mdy>=923 && mdy<=1022)
        return 'Libra';
    if (mdy>=1023 && mdy<=1121)
        return 'Scorpio';
    if (mdy>=1122 && mdy<=1221)
        return 'Sagittarius';
    if(mdy>=1222 || mdy<=119)
        return 'Capricorn';
    if(mdy>=120 && mdy<=218)
        return 'Aquarius';
    return 'Pisces';  //2/19-3/20
}