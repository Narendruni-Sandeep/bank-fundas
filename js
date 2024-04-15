// Function to initialize slideshow
function initializeSlideshow() {
  const slides = document.getElementsByClassName("slide");
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}

// Function to show loan information for a specific bank
function showLoanInfo(loanElement) {
  const slideshowContainer = document.getElementById("slideshow");
  const loanInfo = document.getElementById("loanInfo");
  slideshowContainer.style.display = "none";  // Hide slideshow container
  loanInfo.innerHTML = ""; // Clear any previous loan information
  loanInfo.appendChild(loanElement.cloneNode(true));  // Append the selected bank's loan information
  loanInfo.style.display = "block";  // Show bank loan information
}

// Add event listener for the "Banks" button to show bank list
const bankListBtn = document.getElementById("banklist");
bankListBtn.addEventListener("click", function() {
  const bankList = document.getElementById("list");
  if (bankList.style.display === "none") {
      bankList.style.display = "block";
  } else {
      bankList.style.display = "none";
  }
});

// Add event listeners for bank buttons
const hdfcBtn = document.getElementById("hdfc");
const axisBtn = document.getElementById("axis");
// Add similar lines for other bank buttons

const hdfcLoan = document.getElementById("hdfcLoan").cloneNode(true);
const axisLoan = document.getElementById("axisLoan").cloneNode(true);
// Add similar lines for other bank loan elements

hdfcBtn.addEventListener("click", function() {
  showLoanInfo(hdfcLoan);
});

axisBtn.addEventListener("click", function() {
  showLoanInfo(axisLoan);
});

// Add event listeners for other bank buttons and corresponding loan elements

// Initialize slideshow
initializeSlideshow();
