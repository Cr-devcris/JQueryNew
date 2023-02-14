$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDeFault();
        const enderecoNovaImagem = $('#end-nova-img').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
            ver imagem em tamanho real
            </div>

        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#end-nova-img').val('');
        $(document)
    })
})

