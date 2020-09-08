console.log('modal_alert has attached')
const initModal = (quest, ind) => {
    $(`<div class="modal" tabindex="-1" role="dialog" id="#divModal_${ind}" data-backdrop="static"><div class="modal-dialog" role="document" ><div class="modal-content"><div class="modal-body"><p>${quest}</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal"  id="btnMYes_${ind}">Да</button><button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnMNo_${ind}">Нет</button></div></div></div></div>`).modal('show');
};

const initAlert = msg => $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">${msg}<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`);
