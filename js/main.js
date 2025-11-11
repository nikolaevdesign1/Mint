//status - цвет

document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelectorAll('.status');
  
    select.forEach(el => {
      const updateColor = () => {
        const value = el.value;
        const colors = {
          "Ready": "#00A63E",      // зелёный
          "Booked": "#155DFC",     // синий
          "Presented": "#F54900",  // оранжевый
          "Paid": "#7F22FE",       // фиолетовый
          "Canceled": "#E7000B",   // красный
          "None": "#71717B"        // серый
        };
        el.style.backgroundColor = colors[value] || "#fff"; // fallback
        el.style.color = "#fff";
      };
  
      updateColor(); // при загрузке
      el.addEventListener('change', updateColor);
    });
  });


  $('.table_item input').on('click', function(){
    $('.bottom-nav-active').addClass('active');
  });


const toggle = document.getElementById("appleToggle");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    console.log("🟢 ВКЛ"); // активное состояние
  } else {
    console.log("⚪️ ВЫКЛ"); // пассивное состояние
  }
});