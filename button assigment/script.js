function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF7', '#F7FF33', '#FF8C00', '#8B0000', '#00FA9A', '#4682B4', '#DAA520', '#D2691E', '#FF4500', '#2E8B57'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
