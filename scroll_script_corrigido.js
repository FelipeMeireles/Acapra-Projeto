$(document).ready(function(){
  // Seleciona o botão de contato pela classe
  var contactButton = $(".contact-button");

  // Adiciona o evento de clique ao botão
  contactButton.on("click", function(event) {
    // Previne o comportamento padrão do link (caso o botão seja um <a> com href)
    event.preventDefault();

    // Seleciona o elemento do rodapé pela classe "contato-footer"
    var footerElement = $(".contact-section");
    // Verifica se o elemento do rodapé (ou a seção de contato) existe
    if (footerElement.length) {
      // Anima a rolagem da página para a posição do topo do elemento encontrado
      $("html, body").animate({
        scrollTop: footerElement.offset().top
      }, 800); // 800 é a duração da animação em milissegundos (0.8 segundos)
    } else {
      console.error("Elemento com classe '.contact-section' (ou '.contato-footer') não foi encontrado na página.");
    }
  });
});
