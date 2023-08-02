export const Sort = (array, value) => {
    return array.sort((a, b) => parseFloat(a[value]) - parseFloat(b[value]));
}

export const SetActiveClass = (target) => {
    let array = [...target.parentElement.children]
    array.forEach(el => {
        el.classList.remove('active')
    });
    target.classList.add('active')
}