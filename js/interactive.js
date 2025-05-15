// Certifique-se de que o jQuery está carregado antes deste script.
$(document).ready(function(){
  // Seleciona o botão de contato pela classe
  var contactButton = $(".contact-button");

  // Adiciona o evento de clique ao botão
  contactButton.on("click", function(event) {
    // Previne o comportamento padrão do link (caso o botão seja um <a> com href)
    event.preventDefault();

    // Verifica se o elemento do rodapé com ID "contato-footer" existe
    if ($("#contato-footer").length) {
      // Anima a rolagem da página para a posição do topo do rodapé
      $('html, body').animate({
        scrollTop: $(".contato-footer").offset().top
      }, 800); // 800 é a duração da animação em milissegundos (0.8 segundos)
    } else {
      // Log de erro caso o rodapé não seja encontrado
      console.error("Elemento com ID 'contato-footer' não foi encontrado na página.");
    }
  });

  // Seu código original para mostrar/esconder o botão baseado na rolagem:
  // var descer = $(".contact-button"); // Já definido como contactButton acima
  // $(window).scroll(function() {
  //   var minhaposicao = $(this).scrollTop(); // Corrigido de scrollBotton() para scrollTop()
  //   // Ajuste o valor '4080' conforme a necessidade da sua página
  //   if(minhaposicao >= 4080) { 
  //     contactButton.fadeIn();
  //   } else {
  //     contactButton.fadeOut();
  //   }
  // });
  // Se você não precisar da funcionalidade de mostrar/esconder o botão com base na rolagem,
  // pode remover ou comentar o trecho $(window).scroll(...) acima.
});
