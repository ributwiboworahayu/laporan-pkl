let i = 0;
$('.text-danger').hide();
$('.detail-modal-button').click(function () {
    console.log('clicked');
    $('.card-body').html(load_doc());
    i++;
    if (i == 1) {
        $('.text-danger').show();
        setTimeout(function () {
            $('.text-danger').hide();
        }, 3000);
    }
});

function load_doc() {

    return `
                    <iframe src="https://docs.google.com/viewerng/viewer?url=https://github.com/ributwiboworahayu/laporan-pkl/blob/main/files/ribut-laporan-PKL.docx?raw%3Dtrue&embedded=true" width="100%" height="600px" frameborder="0"></iframe>
                    `;
}