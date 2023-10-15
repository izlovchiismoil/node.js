kabisaAniqlash(2024);
function kabisaAniqlash (yil) {
    const SONI = parseInt(yil / 4);
    let sanagich = 0;
    let kun = 365;
    console.log(SONI);
    for (let i = 0; i <= SONI; i += kun) {
        sanagich++;
        if (sanagich === 4) {
            kun++;
            sanagich = 0;
        }
        else if (sanagich !== 4) {
            kun = 365;
        }
    }
    if (kun === 366) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}