function expand(h3Element) {
    
    var h3Sibling = h3Element.querySelector('span');
  
    if (h3Sibling.style.display === 'none' || h3Sibling.style.display === '') {
        h3Sibling.style.display = 'inline'; 
    } else {
        h3Sibling.style.display = 'none';
    }
  }

  const firstContainer = document.getElementById('firstContainer');
  const secondContainer = document.getElementById('secondContainer');

  firstContainer.addEventListener('mouseover', () =>  {
    secondContainer.classList.add('blur');
    secondContainer.classList.add('transform')
    

  });
  firstContainer.addEventListener('mouseout', () => {

    secondContainer.classList.remove('blur');
    secondContainer.classList.remove("transform");
  });

  secondContainer.addEventListener('mouseover', () => {

    firstContainer.classList.add('blur');
  });

  secondContainer.addEventListener('mouseout', () => {
    firstContainer.classList.remove('blur');
  });