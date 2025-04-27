// Show the form when the button is clicked
document.getElementById("volunteerBtn").addEventListener("click", function () {
  const form = document.getElementById("volunteerForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

// Add an extra interactive element - show more details on hover
const charityInfo = document.createElement("div");
charityInfo.textContent = "Hover over this text to learn more about this charity.";
charityInfo.style.marginTop = "20px";
charityInfo.style.color = "#333";
charityInfo.style.cursor = "pointer";

const moreDetails = document.createElement("div");
moreDetails.textContent = "This charity helps local communities with food, shelter, and education.";
moreDetails.style.display = "none";
moreDetails.style.color = "green";
moreDetails.style.marginTop = "5px";

charityInfo.addEventListener("mouseover", () => {
  moreDetails.style.display = "block";
});

charityInfo.addEventListener("mouseout", () => {
  moreDetails.style.display = "none";
});

// Add to the page just below the volunteer form
const formContainer = document.getElementById("volunteerForm");
formContainer.parentNode.insertBefore(charityInfo, formContainer.nextSibling);
formContainer.parentNode.insertBefore(moreDetails, charityInfo.nextSibling);
