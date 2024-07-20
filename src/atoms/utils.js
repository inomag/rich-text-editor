export const getFormatString = (val, boldMap) => {
    let htmlString = '';

    let boldStarted = false;

    let boldPos = boldMap.length ? boldMap[0] : {};
    let boldIdx = boldMap.length ? 0 : -1;

    for(let i =0;i<val.length; i++) {


        htmlString = htmlString + val[i];
        if(i === boldPos.start) {
            boldStarted = true;
            htmlString = htmlString + '<b>';
        }

        if(i === boldPos.end-1) {
            htmlString = htmlString + '</b>';
            boldStarted = false;
            boldIdx++; 
            boldPos = boldIdx < boldMap.length ? boldMap[boldIdx] : {};
        }
    }

    if(boldStarted){
        htmlString = htmlString + '</b>';
    }

    return htmlString;
}