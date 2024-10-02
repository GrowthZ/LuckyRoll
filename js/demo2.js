let customers = [];
let arrValue = "25251325AX";
let values = [];
let luckyName = "";
let luckyOrderId = "";
$(function () {
    let spd = 30;
    let dur = 10;
    let choice = -1;
    let p = {

        startCallback: function () {
            $('.start').attr('disabled', 'true');
            $('.stop').removeAttr('disabled');
            $('.start').addClass('deactive');
            $('.stop').removeClass('deactive');
        },
        slowDownCallback: function () {
            $('.stop').attr('disabled', 'true');
            $('.stop').addClass('deactive');
        },
        stopCallback: function ($stopElm) {
            $('.start').removeAttr('disabled');
            $('.stop').attr('disabled', 'true');
            $('.start').removeClass('deactive');
            $('.stop').addClass('deactive');
            setTimeout(showInfo,2000);
        }

    }
    initRoulette();
    let rouletter = $('div.roulette');
    rouletter.roulette(p);
    $('.stop').click(function () {
        let stopImageNumber = -1;
        if (stopImageNumber == "") {
            stopImageNumber = null;
        }

        setTimeout(showInfo, 5000);
        // showInfo();
        rouletter.roulette('stop');
    });
    $('.stop').attr('disabled', 'true');
    $('.start').attr('disabled', 'true');
    $('.start').click(function () {
        resetInfo();
        let luckyNum = Math.floor(Math.random() * customers.length);
        arrValue = customers[luckyNum]["orderid"].toUpperCase();
        luckyName = customers[luckyNum]["customername"];
        luckyOrderId = customers[luckyNum]["orderid"].toUpperCase();
        values = convertArray(arrValue.split(''));
        rouletter.roulette('start');
    });

    let updateParamater = function () {
        p['speed'] = Number(spd);
        p['duration'] = Number(dur);
        // p["stopImageNumber"] = Number(arr[index]);
        rouletter.roulette('option', p);
    }
    let updateSpeed = function (speed) {
        $('.speed_param').text(speed);
    }
    updateSpeed(spd);

    let updateDuration = function (duration) {
        $('.duration_param').text(duration);
    }

    updateDuration(dur);
    updateParamater();
    let updateStopImageNumber = function (stopImageNumber) {
        $('.image_sample').children().css('opacity', 0.2);
        $('.image_sample').children().filter('[data-value="' + stopImageNumber + '"]').css('opacity', 1);
        $('.stop_image_number_param').text(stopImageNumber);
        updateParamater();
    }

    let convert = function (char) {
        let arr = "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < arr.length; i++) {
            if (char == arr[i] || char == arr[i].toUpperCase()) {
                return i;
            }
        }
        return 0;
    }

    let convertArray = function (arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(convert(arr[i]));
        }
        return newArr;
    }
    // updateStopImageNumber(choice);
});
let showInfo = function () {
    $('#c-name').text(luckyName);
    $('#c-orderId').text(luckyOrderId);
}
let resetInfo = function () {
    $('#c-name').text("");
    $('#c-orderId').text("");
}

