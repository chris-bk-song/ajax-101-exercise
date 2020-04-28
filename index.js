const generateButton = document.querySelector('#generate-button');


generateButton.addEventListener('click', function() {
  generateButton.innerHTML = "Generating Doggo..."; // or generateButton.textContent
  $.get('https://dog.ceo/api/breeds/image/random')
    .then(function(data) { //.then is a promise
      const img = document.createElement('img');
      console.log('data =', data)
      img.setAttribute('src', data.message)
      images.innerHTML = ''; //add this line so images are replaced for every click
      images.appendChild(img)
    }); 
    generateButton.innerHTML ="Generate Doggo again"; //change text inside button after button click
});

