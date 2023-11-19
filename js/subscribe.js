subscribe=()=> {
    var newsletterInput = document.getElementById('newsletter');
    var subsElement = document.getElementById('subs');

    if (newsletterInput.value === '') {
        subsElement.textContent = "Newsletter Not Subscribed";
    } else {
        subsElement.textContent = "Newsletter Subscribed";
    }
}
