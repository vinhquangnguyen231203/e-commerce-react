export const initalDataLocal = () => {
    const data = JSON.parse(localStorage.getItem('myCart'))
    return data?data: []
}

export const setDataLocal = (localItem) => {
    localStorage.setItem('myCart', JSON.stringify(localItem))
}

export const initialWishData = () => {
    const data = JSON.parse(localStorage.getItem('myWish'))
    return data?data: []
}

export const setWishData = (localItem) => {
    localStorage.setItem('myWish', JSON.stringify(localItem))
}