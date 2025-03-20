function shareWhatsApp() {
    const text = document.getElementById("greetingMessage").innerText;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
  
  function showPopup() {
    document.getElementById("popupBox").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popupBox").style.display = "none";
  }
  