fetch("http://localhost:5000/stats")
  .then(res => res.json())
  .then(data => {

    document.getElementById("stats").innerHTML = `
      <p>Productive Time: ${data.productive} sec</p>
      <p>Unproductive Time: ${data.unproductive} sec</p>
    `;
  });
