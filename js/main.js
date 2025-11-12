


$('.update-form-button-new p').on('click', function(){
  $('.update-form-button-newfield').addClass('active');
});


$('.update-form-button-newfield-menu svg').on('click', function(){
  $('.update-form-button-newfield').removeClass('active');
});

$('p.client').on('click', function(){
  $('.client').addClass('active');
  $('.org').addClass('active');
});

$('p.org').on('click', function(){
  $('.org').addClass('active');
  $('.client').removeClass('active');
});




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





$('.project-table-item-line-column-icon:nth-child(1)').on('click', function(){
  $('.popup_notes').addClass('active');
});


$('.project-table-item-line-column-icon:nth-child(2)').on('click', function(){
  $('.chat_popup').addClass('active');
});

$('.project-table-item-line-column-icon:nth-child(3)').on('click', function(){
  $('.popup_upload').addClass('active');
});

$('.update-popup-icon').on('click', function(){
  $('.popup_notes, .chat_popup, .popup_upload, .create_popup').removeClass('active');
});

$('.bottom-nav-button').on('click', function(){
  $('.create_popup').addClass('active');
});

$('.sidebar-person').on('click', function(){
  $('.siderbar_bottom_popup, .sidebar_background, .sidebar').addClass('active');
});


$('.sidebar-ava').on('click', function(){
  $('.sidebar_up_popup, .sidebar_background, .sidebar').addClass('active');
});

$('.sidebar_background').on('click', function(){
  $('.siderbar_bottom_popup, .sidebar_background, .sidebar, .sidebar_up_popup').removeClass('active');
});


$('.file-info-close_button p').on('click', function(){
  $('.popup_upload').removeClass('active');
});









const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = fileInfo.querySelector('.file-name');
const fileSize = fileInfo.querySelector('.file-size');
const replaceFile = document.getElementById('replaceFile');
const removeFile = document.getElementById('removeFile');

function showFile(file) {
  const size = (file.size / 1024 / 1024).toFixed(1) + ' MB';
  const ext = file.name.split('.').pop().toUpperCase();
  fileName.textContent = file.name;
  fileSize.textContent = `${ext} • ${size}`;
  fileInfo.classList.remove('hidden');
}

// --- Перетаскивание
dropZone.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) showFile(file);
});

// --- Выбор вручную
fileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) showFile(file);
});

// --- Замена файла
replaceFile.addEventListener('click', () => fileInput.click());

// --- Удаление файла
removeFile.addEventListener('click', () => {
  fileInfo.classList.add('hidden');
  fileInput.value = '';
});



const toggle = document.getElementById("appleToggle");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    console.log("🟢 ВКЛ"); // активное состояние
  } else {
    console.log("⚪️ ВЫКЛ"); // пассивное состояние
  }
});


new AirDatepicker('#date1', {
  inline: true
})

new AirDatepicker('#date2', {
  inline: true
})

new AirDatepicker('#date3', {
  inline: true
})

new AirDatepicker('#date4', {
  inline: true
})

new AirDatepicker('#date5', {
  inline: true
})

new AirDatepicker('#date6', {
  inline: true
})

new AirDatepicker('#date7', {
  inline: true
})

new AirDatepicker('#date8', {
  inline: true
})

new AirDatepicker('#date9', {
  inline: true
})
new AirDatepicker('#date10', {
  inline: true
})

new AirDatepicker('#date11', {
  inline: true
})
new AirDatepicker('#date12', {
  inline: true
})

new AirDatepicker('#date13', {
  inline: true
})
new AirDatepicker('#date14', {
  inline: true
})

new AirDatepicker('#date15', {
  inline: true
})
new AirDatepicker('#date16', {
  inline: true
})
