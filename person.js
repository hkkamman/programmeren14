var voornaam = 'Koen';
var achternaam = 'Kamman';
var woonplaats = 'Oosterhout';

function i18l(language) {
    switch(language) {
            
        default:
        case 'nl' :
            return( {
                voornaam : voornaam,
                achternaam : achternaam,
                woonplaats : woonplaats
            })
        break;
            
        case 'uk' :
            return( {
                firstname : voornaam,
                lastname : achternaam,
                town : woonplaats
            })
        break;
    }
}

module.exports = { i18l };