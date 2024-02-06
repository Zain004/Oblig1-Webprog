

    let filmListe = [];
    let filmnavn;
    let antall;
    let fornavn;
    let etternavn;
    let tlf;
    let epost;
    $(document).ready(function () {
    filmnavn = $("#Velgfilm");
    antall = $("#Antall");
    fornavn = $("#Fornavn");
    etternavn = $("#Etternavn");
    tlf = $("#Telefonnr");
    epost = $("#Epost");
});
    function velgFilm() {
    const filmnavn = $("#Velgfilm").val();
    switch(filmnavn) {
    case "Jo nesbø" : {
    filmnavn.val("Jo nesbø");
}
    break;
    case "Roald Dahl" : {
    filmnavn.val("Roald Dahl");
}
    break;
    case "Rampete robin" : {
    filmnavn.val("Rampete Robin");
}
    break;

}
}

    function Antall(innData) {
    const tall = parseInt(innData);
    if(isNaN(innData) || innData <= 0) {
    $("#tomt_Antall").text("Må skrive inn noe antall")
    return;
}
    else {
    $("#Antall").val(tall);
}
}
    function registrer() {

    $("#valgt_film, #tomt_Antall, #tomt_fornavn, #tomt_telefonnr, #tomt_Etternavn, #tomt_epost").text("").css('color','black');

    const valgtFilm = $("#Velgfilm").val();
    if(valgtFilm === "Velg film her") {
    $("#valgt_film").text("Velg en film").css("color",'red');
    return;
}
    filmnavn = valgtFilm;

    const antallet = $("#Antall").val();
    if(isNaN(antallet) || antallet <= 0) {
    $("#tomt_Antall").text("Må skrive inn noe antall").css('color','red');
    return;
}
    antall = antallet;

    const fornavnet = $("#Fornavn").val();
    if(fornavnet === "") {
    $("#tomt_fornavn").text("Må skrive inn noe i Fornavnet!").css('color','red');
    return;
}
    fornavn = fornavnet;

    const etternavnet = $("#Etternavn").val();
    if(etternavnet === "") {
    $("#tomt_Etternavn").text("Må skrive inn noe i Etternavnet").css('color','red');
    return;
}
    etternavn = etternavnet;

    const telefonnummeret = $("#Telefonnr").val();
    if(telefonnummeret === "" || isNaN(telefonnummeret) || telefonnummeret.length !== 8) {
    $("#tomt_telefonnr").text("Må skrive et gyldig telefonnr på 8 siffer").css('color','red');
    return;
}
    tlf = telefonnummeret;

    const eposten = $("#Epost").val();
    if(eposten === "" || eposten.indexOf("@") == -1) {
    $("#tomt_epost").text("Skriv inn en gyldig e-postadresse").css('color','red');
    return;
}
    epost = eposten;


    const film = {
    filmnavn : filmnavn,
    antall : antall,
    fornavn : fornavn,
    etternavn : etternavn,
    telefonnr : tlf,
    epost : epost
};
    filmListe.push(film);
    $('input').val('');
    resultat();
}

    function resultat() {
    let ut = "<tr><th>Filmnavn</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for(let enFilm of filmListe) {
    ut+= '<tr>'
    ut+= '<td>'+enFilm.filmnavn +'</td>';
    ut+= '<td>'+ enFilm.antall +'</td>';
    ut+= '<td>'+ enFilm.fornavn +'</td>';
    ut+= '<td>'+ enFilm.etternavn +'</td>';
    ut+= '<td>'+ enFilm.telefonnr +'</td>';
    ut+= '<td>'+ enFilm.epost +'</td>';
    ut+= '</tr>';
}
    $("#resultat").html(ut);
}

    function slettAlleBiletter() {
    filmListe = [];
    resultat();
}
