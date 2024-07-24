//your JS code here. If required.
function removeSelectedColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}
document.querySelector('input[type="button"]').addEventListener('click', removeSelectedColor);