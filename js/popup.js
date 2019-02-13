var popupControl = (function() {
  var allPopups = document.querySelectorAll(".popup");
  var popupBackground = document.querySelector(".popup_background");
  var popupOnBtns = document.querySelectorAll(".popup-on");
  var popupOffBtns = document.querySelectorAll(".popup_close");

  function openPopup(popupName) {
    var popup = document.querySelector(".popup." + popupName);
    popup.classList.add("show");
    popupBackground.classList.add("show");
  }

  function closeAllPopups() {
    allPopups.forEach(popup => {
      popup.classList.remove("show");
    });
    popupBackground.classList.remove("show");
  }

  function init() {
    popupOnBtns.forEach(btnOn => {
      btnOn.addEventListener("click", function() {
        var popupName = this.getAttribute("data-popup");
        openPopup(popupName);
      });
    });
    popupOffBtns.forEach(btnOff => {
      btnOff.addEventListener("click", closeAllPopups);
    });

    popupBackground.addEventListener("click", closeAllPopups);

    window.addEventListener("keyup", function(e) {
      if (e.which === 27) {
        closeAllPopups();
      }
    });
  }

  return {
    init: init,
    open: openPopup,
    closeAll: closeAllPopups
  };
})();

export default popupControl;
