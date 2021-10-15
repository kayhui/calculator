function go() {
    //discretion
    first =  '<div class="container-fluid"><div class="row"><p id="description" class="fs-5 ps-4">Description:<br>Please input the pages number in the relative boxes.<br>press cal button to calculate the time cost.</p></div>';
    //header
    first += '<div class="row"><div id="header" class="col-4"><div class="container-fluid firstAlgorite"><div class="row"><div class="col-5 p-0"><input class="form-control h-100" type="text" value="Paper size (content)" readonly></div><div class="col-6 p-0"><input class="form-control h-100 " type="text" value="Pages" readonly></div></div></div></div></div>';
    //button
    
    first += '<div class="row"><div id="displayZone" class="col-4"><div id="A4EN" class="container-fluid firstAlgorite"><div class="row"><div class="col-5 p-0"><input class="form-control h-100" type="text" value="A4 (Text)" readonly></div><div class="col-6 p-0"><div class="form-floating h-100"><input type="text" class="form-control h-100 inputNumA4En" id="floatingInput" placeholder=""><label for="floatingInput">Input pages</label></div></div></div></div></div>';
    first += '<div class="col-3" style="height: 0"><button type="button" class="btn btn-outline-primary fs-2" onclick="calculate()"><i class="bi bi-calculator-fill"></i>Cal</button></div></div>';
    first += '<div class="row"><div id="displayZone" class="col-4"><div id="A4TC" class="container-fluid firstAlgorite"><div class="row"><div class="col-5 p-0"><input class="form-control h-100" type="text" value="A4 (Text+Img)" readonly></div><div class="col-6 p-0"><div class="form-floating h-100"><input type="number" class="form-control h-100 inputNumA4Tc" id="floatingInput" placeholder=""><label for="floatingInput">Input pages</label></div></div></div></div></div></div>';
    first += '<div class="row"><div id="displayZone" class="col-4"><div id="A3EN" class="container-fluid firstAlgorite"><div class="row"><div class="col-5 p-0"><input class="form-control h-100" type="text" value="A3 (Text)" readonly></div><div class="col-6 p-0"><div class="form-floating h-100"><input type="number" class="form-control h-100 inputNumA3En" id="floatingInput" placeholder=""><label for="floatingInput">Input pages</label></div></div></div></div></div></div>';
    first += '<div class="row"><div id="displayZone" class="col-4"><div id="A3TC" class="container-fluid firstAlgorite"><div class="row"><div class="col-5 p-0"><input class="form-control h-100" type="text" value="A3 (Text+Img)" readonly></div><div class="col-6 p-0"><div class="form-floating h-100"><input type="number" class="form-control h-100 inputNumA3Tc" id="floatingInput" placeholder=""><label for="floatingInput">Input pages</label></div></div></div></div></div></div>';
    first += '<div class="row"><p id="radio" class="fs-3 ps-4"></p></div>';
    first += '</div></div></div></div>';
    $("#report").html(first);
}

function calculate() {

    let minTakeTime = 0;
    let a4en = $(".inputNumA4En").val() * 9;
    let a3en = $(".inputNumA3En").val() * 24;
    let a4tc = $(".inputNumA4Tc").val() * 10;
    let a3tc = $(".inputNumA3Tc").val() * 32;
    // console.log(a4en);
    // console.log(a4tc);
    // console.log(a3en);
    // console.log(a3tc);
    let maxTakeTime = 0;
    let a4enMax = $(".inputNumA4En").val() * 15;
    let a3enMax = $(".inputNumA3En").val() * 30;
    let a4tcMax = $(".inputNumA4Tc").val() * 15;
    let a3tcMax = $(".inputNumA3Tc").val() * 39;

    minTakeTime = a4en + a4tc + a3en + a3tc;
    maxTakeTime = a4enMax + a4tcMax + a3enMax + a3tcMax;
    // console.log(minTakeTime);
    // console.log(maxTakeTime);
    var h = Math.floor(minTakeTime / 3600);
    var m = Math.floor((minTakeTime / 60 % 60));
    var s = Math.floor((minTakeTime % 60));
    // console.log("Time required about " + h + " Hour " + m + " Min " + s + " Sec ");
    var h1 = Math.floor(maxTakeTime / 3600);
    var m1 = Math.floor((maxTakeTime / 60 % 60));
    var s1 = Math.floor((maxTakeTime % 60));

    // console.log("Time required about " + h1 + " Hour " + m1 + " Min " + s1 + " Sec ");
    $("#radio").html("Minimum of time: <span class=\"text-danger\">" + h + "</span>" + " Hour " + "<span class=\"text-danger\">" + m + "</span>" + " Min " + "<span class=\"text-danger\">" + s + "</span>" + " Sec " + "<br>Maximize of time: <span class=\"text-danger\">" + h1 + "</span>" + " Hour " + "<span class=\"text-danger\">" + m1 + "</span>" + " Min " + "<span class=\"text-danger\">" + s1 + "</span>" + " Sec ");
}

