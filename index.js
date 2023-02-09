function search_recipe() {
    let input= document.getElementById('searchbar').value
    input= input.toLowerCase();
    let a = document.getElementsByClassName('recipes');

    for (i = 0; i < a.length; i++) {
        if (!a[i].innerHTML.toLowerCase().includes(input)) {
            a[i].style.display='none';
        }
        else {
            a[i].style.display='list-item';
        }
    }
}


