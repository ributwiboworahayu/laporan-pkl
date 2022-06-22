$('.text-danger').hide();
$('.detail-modal-button').click(function () {
    console.log('clicked');
    $('.detail-modal-button').html(loading());
    load_data();
    // location.href = 'https://docs.google.com/viewer?url=https://github.com/ributwiboworahayu/laporan-pkl/blob/main/files/ribut-laporan-PKL.docx?raw=true&embedded=true';
    // $('.card-body').html(load_doc());
    // $('.text-danger').show();
    // setTimeout(function () {
    //     $('.text-danger').hide();
    // }, 2700);

});

function load_doc() {

    return `
                    <embed src="https://docs.google.com/viewer?url=https://github.com/ributwiboworahayu/laporan-pkl/blob/main/files/ribut-laporan-PKL.docx?raw=true&embedded=true" width="100%" height="600px" frameborder="0"></embed>
                    `;
}

function load_data(){
    location.href = 'https://docs.google.com/viewer?url=https://github.com/ributwiboworahayu/laporan-pkl/blob/main/files/ribut-laporan-PKL.docx?raw=true&embedded=true';
}

function loading(){
    return `
    <div class="loader"></div>
    `;
}



// https://docs.google.com/viewerng/viewer?url=https://github.com/ributwiboworahayu/laporan-pkl/blob/main/files/ribut-laporan-PKL.docx?raw%3Dtrue&embedded=true