// {/* <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css"
//     /> */}
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js">
//     function getIp(callback) {
//       fetch("https://ipinfo.io/json?token=<your token>", {
//         headers: { Accept: "application/json" },
//       })
//         .then((resp) => resp.json())
//         .catch(() => {
//           return {
//             country: "us",
//           };
//         })
//         .then((resp) => callback(resp.country));
//     }
//     const phoneInputField = document.querySelector("#phone");
//     const phoneInput = window.intlTelInput(phoneInputField, {
//       initialCountry: "auto",
//       geoIpLookup: getIp,
//       preferredCountries: ["ng", "gh", "us", "gr"],
//       utilsScript:
//         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//     });
//     const info = document.querySelector(".alert-info");

//     function process(event) {
//       event.preventDefault();

//       const phoneNumber = phoneInput.getNumber();

//       info.style.display = "";
//       info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
//     }
//   </script>
