// ACTIONS
const addAction = {
    type: 'ADD',
 };

 const addAction = {
    type: 'ADDTEN',
 };
 
 const removeAction = {
    type: 'REMOVE',
 };

 const removeActionTen = {
    type: 'REMOVETEN',
 };

 const reset = {
    type: 'RESET',
 };
 
 // REDUCER
 const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'ADDTEN':
            return state + 10;
        case 'REMOVE':
            return state - 1;
        case 'REMOVETEN':
            return state - 10;
        case 'RESET':
            return state =0;
        default:
            return state;
    }
 }
 
 // STORE
 const { createStore } = Redux;
 const store = createStore(counterReducer);
 
 // MAIN
 const renderStore = document.getElementById('render-store');
 const render = () => {
    renderStore.innerHTML = store.getState();
 }
 
 store.subscribe(render);
 render();
 
 const add = document.getElementById('add');
 add.addEventListener('click', () => {
    store.dispatch(addAction)
 });

 const add = document.getElementById('addTen');
 add.addEventListener('click', () => {
    store.dispatch(addActionTen)
 });
 
 const remove = document.getElementById('remove');
 remove.addEventListener('click', () => {
    store.dispatch(removeAction)
 });

 const remove = document.getElementById('removeTen');
 remove.addEventListener('click', () => {
    store.dispatch(removeActionTen)
 });

 const remove = document.getElementById('reset');
 remove.addEventListener('click', () => {
    store.dispatch(removeActionReset)
 });
 