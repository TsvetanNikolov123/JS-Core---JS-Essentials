function solve() {
    let input = document.getElementById('string').value.split(',').filter(x => x !== '');
    let result = document.getElementById('result');

    let textForExtraction = input[0];
    let informationToPrint = input[1].trim();

    let passengerRegex = /(\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*\s|\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*\.-[A-Z][A-Za-z]*\s)/gm;
    let airportRegex = /\s[A-Z]{3}\/[A-Z]{3}\s/gm;
    let flightNumberRegex = /\s[A-Z]{1,3}\d{1,5}\s/gm;
    let companyRegex = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]*\s/gm;

    let passengerName = passengerRegex.exec(textForExtraction)[0].replace(/-/g, ' ').trim();
    let airportNames = airportRegex.exec(textForExtraction);
    let startAirportName = airportNames[0].split('/')[0].trim();
    let endAirportName = airportNames[0].split('/')[1].trim();
    let flightNumber = flightNumberRegex.exec(textForExtraction)[0].trim();
    let companyName = companyRegex.exec(textForExtraction)[0].replace('- ', ' ').replace('*', ' ').trim();

    switch (informationToPrint) {
        case 'all':
            let allResult = `Mr/Ms, ${passengerName}, your flight number ${flightNumber} is from ${startAirportName} to ${endAirportName}. Have a nice flight with ${companyName}.`;
            result.innerHTML = allResult;
            break;
        case 'name':
            let nameResult = `Mr/Ms, ${passengerName}, have a nice flight!`;
            result.innerHTML = nameResult;
            break;
        case 'company':
            let companyResult = `Have a nice flight with ${companyName}.`;
            result.innerHTML = companyResult;
            break;
        case 'flight':
            let flightResult = `Your flight number ${flightNumber} is from ${startAirportName} to ${endAirportName}.`;
            result.innerHTML = flightResult;
            break;
    }
}