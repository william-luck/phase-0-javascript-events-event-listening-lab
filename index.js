function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
  alert('I was clicked!');
});
}

const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

// don't want to put clickAlert() here because we just want to reference the function, not invoke it immediately. If we do put the (), the function will just be invoked automatically. 
input.addEventListener('click', clickAlert);