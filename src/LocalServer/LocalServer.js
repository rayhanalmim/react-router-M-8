const getItemFromLocal = () => {
    const isExists = localStorage.getItem('saved-card');
    if(isExists){
        return JSON.parse(isExists);
    }
    return [];
}
const setItemToLS = (id) => {
    const storedItem = getItemFromLocal();
    const exists = storedItem.find((storedId) => storedId === id);
    if(!exists){
        storedItem.push(id);
        localStorage.setItem('saved-card', JSON.stringify(storedItem));
    }
}
export {getItemFromLocal, setItemToLS}