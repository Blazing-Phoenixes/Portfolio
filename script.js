document.getElementById("show1").addEventListener("click", function () {
  var content = document.getElementById("content1");
  content.classList.toggle("hidden");
  var content = document.getElementById("content2");
  content.classList.toggle("hidden");
  var content = document.getElementById("content4");
  content.classList.toggle("hidden");
}); //project of py content

document.getElementById("show2").addEventListener("click", function () {
  var content = document.getElementById("content3");
  content.classList.toggle("hidden");
}); //project of front content

function toggleMenu() {
  let navbar = document.getElementById("myNavbar");
  navbar.className =
    navbar.className === "navbar" ? "navbar responsive" : "navbar";
} //responsive nav in mobile

const form = document.getElementById('C1');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = ""

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

const popupContainer = document.getElementById('popup-container');
const closePopupButton = document.getElementById('close-popup');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Show popup
  popupContainer.style.display = 'block';
});

// Add event listener to close popup button
closePopupButton.addEventListener('click', () => {
  // Hide popup
  popupContainer.style.display = 'none';
});
