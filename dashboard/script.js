async function loadAnalytics() {

  const response =
    await fetch(
      "http://localhost:5000/stats"
    );

  const data =
    await response.json();

  document.getElementById(
    "analytics"
  ).innerHTML = `
    <h3>Productive Time</h3>
    <p>${data.productive} seconds</p>

    <h3>Unproductive Time</h3>
    <p>${data.unproductive} seconds</p>
  `;
}

loadAnalytics();
