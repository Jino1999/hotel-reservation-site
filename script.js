document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const scriptURL = "https://script.google.com/macros/s/AKfycbwPasb4A5RtV7okeOSR8PuEeGRJ_KtVYTjfAZPbyES2H2Fci4lkg4axG4JsmmI_Vtw/exec";
  const form = e.target;
  const formData = new FormData(form);

  const urlEncoded = new URLSearchParams(formData);

  fetch(scriptURL, {
    method: "POST",
    body: urlEncoded,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then((response) => {
      if (response.ok) {
        alert("✅ Reservation submitted successfully!");
        form.reset();
      } else {
        alert("❌ Failed to submit reservation.");
      }
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
      alert("⚠️ Submission error.");
    });
});
