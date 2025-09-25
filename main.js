/*Create a horoscope app where the user can enter their birthday and 
get their horoscope. There should be minimum 12 unique horoscopes.*/

const horoscope={
    Aries: 'The Ram', Taurus: 'The Bull', Gemini: 'The Twins', Cancer:'The Crab', Leo: 'The Lion', Virgo: 'The Virgin', 
    Libra:'The Scales', Scorpio:'The Scorpion', Sagittarius:'The Archer',
    Capricorn:'The Goat', Aquarius: 'The Water-bearer', Pisces:'The Fish'
};
document.getElementById('get').addEventListener('click', () =>{ //learned this from the Javascript DOM crash course
    const input=document.getElementById('birthday').value
    if (!input){
        alert('Please enter your birthday');
        return;

    }
    const [, mnth, dy]=input.split('-');//referenced from https://stackoverflow.com/questions/26436545/split-method-in-python-is-there-a-way-to-view-its-source-code-aka-how-it
    const month= Number(mnth);
    const day=Number(dy);

    const message=horoscope[horoscopeFromBirthday(month, day)];

    const result=document.getElementById('result');
    const msgEl=document.getElementById('result-message')

    // Write plain text to the DOM (no HTML strings)
    msgEl.textContent = message;
   
});


function horoscopeFromBirthday(month, day){
    const mdy= month*100 + day;//using this formula to extract horoscope info
    
    if (mdy>=321 && mdy<=419)//Mar 21-Apr 19
        return 'Aries';
    if (mdy>=420 && mdy<=520)//Apr 20 - May 20
        return 'Taurus';
    if (mdy>=521 && mdy<=620)//May 21-Jun 20
        return 'Gemini';
    if (mdy>=621 && mdy<=722)//Jun 21 - Jul 22
        return 'Cancer';
    if (mdy>=723 && mdy<=822)//Jul 23 - Aug 22
        return 'Leo';
    if (mdy>=823 && mdy<=922)//Aug 23 - Sept 22
        return 'Virgo';
    if (mdy>=923 && mdy<=1022)//Sept 23 - Oct 22
        return 'Libra';
    if (mdy>=1023 && mdy<=1121)//Oct 23 - Nov 21
        return 'Scorpio';
    if (mdy>=1122 && mdy<=1221)//Nov 22 - Dec 21
        return 'Sagittarius'; 
    if(mdy>=1222 || mdy<=119)//Dec 22 - Jan 19
        return 'Capricorn';
    if(mdy>=120 && mdy<=218)//Jan 20 - Feb 18
        return 'Aquarius';
    return 'Pisces';  //Feb 19 - Mar 20
}

