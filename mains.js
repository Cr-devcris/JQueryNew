$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
})

    $('form').on('submit', function(e){
        e.preventDeFault();
        const enderecoDaNovaImagem = $('#endNovaImg').val();
        const novoItem = $('<li></li>');
        console.log(enderecoDaNovaImagem);
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
            ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endNovaImg').val('')
    })