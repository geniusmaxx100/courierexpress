function trackPackage() {
  const input = document.getElementById("trackingInput").value;
  const result = document.getElementById("result");

  if (input === "GC123") {
    result.innerHTML = `
      <h3>Status: In Transit</h3>
      <p>Location: Lagos</p>
      <p>Estimated Delivery: 3 Days</p>
    `;
  } else {
    result.innerHTML = `<p>Tracking number not found</p>`;
  }
}
