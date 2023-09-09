// სახელის input
let nameInput = document.getElementById("name");
let NameError = document.querySelector(".error_message");
let nameResult = document.getElementById("name_result");
let success_error_name = document.getElementById("success_error_name");

nameInput.addEventListener("input", () => {
  NameError.innerHTML = "";
  nameResult.innerHTML = "";

  if (nameInput.value.length < 2) {
    nameInput.classList.add("wrong");
    success_error_name.innerHTML = "&#xf071";
    success_error_name.style.color = "#F02424";
    success_error_name.style.position = "absolute";
    success_error_name.style.left = "92%";
    success_error_name.style.top = "50%";
    success_error_name.style.transform = "translateY(-50%)";
    NameError.innerHTML = "მინიმუმ 2 ასო";
  }
  if (arisSxvaSimbolo(nameInput.value)) {
    nameInput.classList.add("wrong");
    success_error_name.innerHTML = "&#xf071";
    success_error_name.style.color = "#F02424";
    success_error_name.style.position = "absolute";
    success_error_name.style.left = "92%";
    success_error_name.style.top = "50%";
    success_error_name.style.transform = "translateY(-50%)";

    if (NameError.innerHTML !== "") {
      NameError.innerHTML += ", ქართული ასოები";
    } else {
      NameError.innerHTML = "ქართული ასოები";
    }
  }
  if (nameInput.value.length >= 2 && !arisSxvaSimbolo(nameInput.value)) {
    nameInput.classList.remove("wrong");
    nameInput.classList.add("correct");

    success_error_name.innerHTML = "&#xf058";
    success_error_name.style.color = "#98e37e";
    success_error_name.style.position = "absolute";
    success_error_name.style.left = "75%";
    success_error_name.style.top = "50%";
    success_error_name.style.transform = "translateY(-50%)";

    nameResult.innerHTML = nameInput.value;
  }

  // localStorage.setItem("name_result", nameInputValue);
  // return false;
});

// გვარის input
let surnameInput = document.getElementById("surname");
let surnameError = document.querySelector(".error_message_surname");
let surnameResult = document.getElementById("surname_result");
let success_error_surname = document.getElementById("success_error_surname");

surnameInput.addEventListener("input", () => {
  surnameError.innerHTML = "";
  surnameResult.innerHTML = "";

  if (surnameInput.value.length < 2) {
    nameInput.classList.add("wrong_sur");
    success_error_surname.innerHTML = "&#xf071";
    success_error_surname.style.color = "#F02424";
    success_error_surname.style.position = "absolute";
    success_error_surname.style.left = "92%";
    success_error_surname.style.top = "50%";
    success_error_surname.style.transform = "translateY(-50%)";
    surnameError.innerHTML = "მინიმუმ 2 ასო";
  }
  if (arisSxvaSimbolo(surnameInput.value)) {
    surnameInput.classList.add("wrong_sur");
    success_error_surnamesuccess_error_surname.innerHTML = "&#xf071";
    success_error_surnamesuccess_error_surname.style.color = "#F02424";
    success_error_surnamesuccess_error_surname.style.position = "absolute";
    success_error_surnamesuccess_error_surname.style.left = "92%";
    success_error_surnamesuccess_error_surname.style.top = "50%";
    success_error_surnamesuccess_error_surname.style.transform =
      "translateY(-50%)";

    if (surnameError.innerHTML !== "") {
      surnameError.innerHTML += ", ქართული ასოები";
    } else {
      surnameError.innerHTML = "ქართული ასოები";
    }
  }
  if (surnameInput.value.length >= 2 && !arisSxvaSimbolo(surnameInput.value)) {
    surnameInput.classList.remove("wrong_sur");
    surnameInput.classList.add("correct_sur");

    success_error_surname.innerHTML = "&#xf058";
    success_error_surname.style.color = "#98e37e";
    success_error_surname.style.position = "absolute";
    success_error_surname.style.left = "75%";
    success_error_surname.style.top = "50%";
    success_error_surname.style.transform = "translateY(-50%)";

    surnameResult.innerHTML = surnameInput.value;
  }

  // localStorage.setItem("name_result", nameInputValue);
  // return false;
});

function arisSxvaSimbolo(text) {
  const alphabet = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";
  let sheicavsSxvaSimbolos = false;
  for (let x of text) {
    if (!alphabet.includes(x)) {
      sheicavsSxvaSimbolos = true;
      break;
    }
  }
  return sheicavsSxvaSimbolos;
}

// ფოტო (file) upload
let uploadBtn = document.getElementById("get_file");
let choosenImage = document.getElementById("uploadImg");

uploadBtn.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadBtn.files[0]);
  console.log(uploadBtn.files[0]);
  reader.onload = () => {
    choosenImage.setAttribute("src", reader.result);
  };
};

// textarea ჩემს შესახებ
let aboutMeTextarea = document.getElementById("about_me");
let AboutMeTitle = document.getElementById("aboutme_title");
let resultTextarea = document.getElementById("value_textarea");

aboutMeTextarea.addEventListener("input", () => {
  if (aboutMeTextarea == "") {
    AboutMeTitle.innerHTML = "";
  }
  if (aboutMeTextarea !== "") {
    AboutMeTitle.innerHTML = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
    value_textarea.innerHTML = aboutMeTextarea.value;
  }
  if (value_textarea.innerHTML === "") {
    AboutMeTitle.innerHTML = "";
  }
});

// ელ-ფოსტის input
let emailInput = document.getElementById("email");
// let emailInputValue = emailInput.value;
let success_error_email = document.getElementById("success_error_email");
let email_label = document.getElementById("email_label");
let emailError = document.querySelector(".email_error_text");
let resultEmail = document.getElementById("value_email");
let emailIcone = document.getElementById("EMAIL");

emailInput.addEventListener("input", () => {
  if (!checkEmail(emailInput.value)) {
    emailError.innerHTML = "უნდა მთავრდებოდეს .ge-ით";
    resultEmail.innerHTML = "";
    emailIcone.innerHTML = "";

    success_error_email.innerHTML = "&#xf071";
    success_error_email.style.position = "absolute";
    success_error_email.style.left = "92%";
    success_error_email.style.top = "50%";
    success_error_email.style.transform = "translateY(-50%)";

    success_error_email.style.color = "#F02424";
    let emailInput = document.getElementById("email");
    emailInput.style.border = "1px solid #EF5050";
    email_label.style.color = "#EF5050";
  }
  if (checkEmail(emailInput.value)) {
    emailError.innerHTML = "";
    resultEmail.innerHTML = emailInput.value;
    emailIcone.innerHTML = "&#x40";

    success_error_email.innerHTML = "&#xf058";
    success_error_email.style.color = "#98E37E";
    success_error_email.style.position = "absolute";
    success_error_email.style.left = "75%";
    success_error_email.style.top = "50%";
    success_error_email.style.transform = "translateY(-50%)";
    emailInput.style.border = "1px solid #98E37E";
    email_label.style.color = "#98E37E";
  }
});

function checkEmail(email) {
  const ending = ".ge";
  const index = email.indexOf(ending);
  return email.length - index === ending.length;
}

// მობილურის ნომერი
let mobileNumberInput = document.getElementById("mobile_number");
let numberError = document.querySelector(".min_size");
let call = document.getElementById("call");
let mobileResult = document.getElementById("value_number");
let success_error_mobile = document.getElementById("success_error_mobile");

mobileNumberInput.addEventListener("input", () => {
  numberError.innerHTML = "";
  mobileResult.innerHTML = "";
  call.innerHTML = "";

  if (!validatePhoneNumber(mobileNumberInput.value)) {
    numberError.innerHTML =
      "უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს";

    mobileNumberInput.classList.add("wrong");

    success_error_mobile.innerHTML = "&#xf071";
    success_error_mobile.style.color = "#F02424";
    success_error_mobile.style.position = "absolute";
    success_error_mobile.style.left = "92%";
    success_error_mobile.style.top = "50%";
    success_error_mobile.style.transform = "translateY(-50%)";
  } else {
    call.innerHTML = "&#xf095";
    mobileResult.innerHTML = mobileNumberInput.value;
    mobileNumberInput.classList.remove("wrong");
    mobileNumberInput.classList.add("correct");

    success_error_mobile.innerHTML = "&#xf058";
    success_error_mobile.style.color = "#98e37e";
    success_error_mobile.style.position = "absolute";
    success_error_mobile.style.left = "75%";
    success_error_mobile.style.top = "50%";
    success_error_mobile.style.transform = "translateY(-50%)";
  }
});

function validatePhoneNumber(input_str) {
  var numbers = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
  return numbers.test(input_str);
}

// ღილაკზე კლიკის დროს უნდა ამოიბეჭდოს
const displaySection = document.getElementById("print_page");
const downloadButton = document.getElementById("download_button");

downloadButton.addEventListener("click", () => {
  let firstSection = document.getElementById("firstSectionId");
  firstSection.style.display = "none";
  downloadButton.style.display = "none";
  displaySection.style.width = "100%";
  window.print();
  displaySection.style.width = "40%";
  firstSection.style.display = "block";
  downloadButton.style.display = "block";
});
