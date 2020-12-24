fetch("http://localhost:3000/weather?cityName=Toronto").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
    }
  });
});
