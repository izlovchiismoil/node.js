console.log(sonniXonaRaqamlariniAniqlash (10011));

function sonniXonaRaqamlariniAniqlash (a) {

    if (a < 0) {
        return "1 dan kichik son kiritilgan";
    }
    else if (a >= 1000) {
        return "999 dan katta son kiritilgan";
    }
    else if (a <= 9) {
        return 1;
    }
    else if (a <= 99) {
        return 2;
    }
    else if (a <= 999) {
        return 3;
    }
}