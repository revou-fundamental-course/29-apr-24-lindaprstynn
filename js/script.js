// Validate Function
function validation() {
  let username = document.getElementById("form-name").value;
  if (username == "" || username == null) {
    document.getElementById("form-name").style.border = "1px solid red";
    alert("Inputan Anda Kosong, Periksa Kembali");
    document.getElementById("form-name").style.border = "1px solid red";
  } else {
    let phone = document.getElementById("form-phone").value;
    if (phone == "" || phone == null) {
      document.getElementById("form-phone").style.border = "1px solid red";
      alert("Inputan Anda Kosong, Periksa Kembali");
    } else {
      let email = document.getElementById("form-email").value;
      if (email == "" || email == null) {
        document.getElementById("form-email").style.border = "1px solid red";
        alert("Inputan Anda Kosong, Periksa Kembali");
      } else {
        let package = document.getElementById("form-package").value;
        if (package == "" || package == null) {
          document.getElementById("form-package").style.border = "1px solid red";
          alert("Inputan Anda Kosong, Periksa Kembali");
        } else {
          alert("Welcome " + username);
          console.log(username);

          document.getElementById("form-name").value = "";
          document.getElementById("form-phone").value = "";
          document.getElementById("form-email").value = "";
          document.getElementById("form-package").value = "";
        }
      }
    }
  }
}

// Section Slide
let indexSlide = 1;
showSlide(1);

// Trigger Slide
function nextSlide(n) {
  console.log("nextSlide: " + n);
  showSlide((indexSlide += n));
}

// Slide Logic
function showSlide(index) {
  let listImage = document.getElementsByClassName("banner-item");
  console.log(listImage);
  console.log("Banyaknya Image: " + listImage.length);

  // Reset SlideIndex
  if (index > listImage.length) {
    indexSlide = 1;
  }

  // Hide all images
  let i = 0;
  while (i < listImage.length) {
    listImage[i].style.display = "none";
    i++;
  }

  // Show only one image
  listImage[indexSlide - 1].style.display = "block";
  console.log("showSlide: " + index);
}

setInterval(() => nextSlide(1), 2000);

// document.getElementById("button-item-form").addEventListener("click", () => nextSlide(1));
document.getElementById("button-item-form").addEventListener("click", () => validation());

document.getElementById("form-name").addEventListener("input", function () {
  document.getElementById("form-name").style.border = "";
});
document.getElementById("form-phone").addEventListener("input", function () {
  document.getElementById("form-phone").style.border = "";
});
document.getElementById("form-email").addEventListener("input", function () {
  document.getElementById("form-email").style.border = "";
});
document.getElementById("form-package").addEventListener("input", function () {
  document.getElementById("form-package").style.border = "";
});
