function saveToStorage(i, userTask) {
    localStorage.setItem(i, JSON.stringify(userTask));
}

export {saveToStorage};