function go() {
    first = '<P id="discribe" class="fs-4 ">Default setting is A4 size in English.</P>';
    first += '<p id="radio" class="fs-2 " style="flex: end 0;"></p>';
    first += '<div class="container-fluid">';
    first += '<div class="row"><div id="displayZone" class="col-4">';
    first += '<div id="first" class="container-fluid firstAlgorite"><div class="row"><div class="col-6 p-0">';
    first += '<div class="form-floating h-100">';
    first += '<input type="number" class="form-control h-100 inputNum" id="floatingInput" placeholder="">';
    first += '<label for="floatingInput">Input pages</label>';
    first += '</div>';
    first += '</div >';
    first += '<div class="col-3 p-0"><select id="size" class="form-select h-100 sizeSeclet"><option selected value="1">A4</option><option value="2">A3</option></select>';
    first += '</div>';
    first += '<div class="col-3 p-0"><select class="form-select h-100 language"><option selected value="1">EN</option><option value="2">TC</option><option value="3">SC</option></select>';
    first += '</div>';
    first += '</div >';
    first += '</div >';
    first += '</div >';
    first += '<div class="col-3" style="height: 0">';
    first += '<div class="btn-toolbar h-100" role="toolbar">';
    first += '<div class="btn-group me-2" role="group">';
    first += '<button type="button" class="btn btn-outline-primary fs-2" onclick="createNewDiv()"><i class="bi bi-plus-lg"></i> Add</button>';
    first += '<button type="button" id="remove" class="btn btn-outline-primary fs-2 " onclick="removeDiv()"><i class="bi bi-dash-lg"></i>Remove</button>';
    first += '<button type="button" class="btn btn-outline-primary fs-2" onclick="calculate()"><i class="bi bi-calculator-fill"></i>Cal</button>';
    first += '</div>';
    first += '</div>';
    first += '</div>';
    first += '</div>';
    first += '</div>';
    $('#report').html(first);
}
function calculate() {
    let taketime = 0;
    for (let i = 0; i < $(".inputNum").length; i++) {
        let pages = $(".inputNum")[i].value;
        let size = $(".sizeSeclet")[i].value;
        let lan = $(".language")[i].value;
        if ((size == 1 && lan == 1) || (size == 1 && lan == 2) || (size == 1 && lan == 3)) {
            taketime = taketime + (pages * 12);
            console.log("A4EN/A4TC");
        }
        if (size == 2 && lan == 1) {
            taketime = taketime + (pages * 27);
            console.log("A3EN");
        }
        if ((size == 2 && lan == 2) || (size == 2 && lan == 3)) {
            taketime = taketime + (pages * 34);
            console.log("A3TC");
        }
        var h = Math.floor(taketime / 3600);
        var m = Math.floor((taketime / 60 % 60));
        var s = Math.floor((taketime % 60));
        $("#radio").html("Time required about " + h + " Hour " + m + " Min " + s + " Sec ");
    }
}

function createNewDiv() {

    $($(".firstAlgorite")[0]).clone().appendTo("#displayZone");
}

function removeDiv() {

    if ($(".firstAlgorite").length > 1) {
        $(".firstAlgorite").last().remove();
    }
}

