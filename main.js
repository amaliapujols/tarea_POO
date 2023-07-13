// Crear una clase en JavaScript que me permita manipular el localStorage, la misma debe permitirme Visualizar, Agregar, Editar y Eliminar (Ya sea un elemento o todo el Storage).

class LocalStorage {

    //Constructor

    constructor (key) {
        this.key = key;
    }

    //Metodos

    //Add item
    addElement(name) {
        const elements = localStorage.getItem(this.key) === null ? [] : JSON.parse(localStorage.getItem(this.key));
        const element = {
            id: elements.length + 1,
            name: name,
        };
        elements.push(element);
        localStorage.setItem(this.key, JSON.stringify(elements));
    }

    //View all items
    viewElements() {
        const elements = localStorage.getItem(this.key) === null ? [] : JSON.parse(localStorage.getItem(this.key));
        return elements;
    }

    //Edit item
    editElement(id, newName) {
        const elements = localStorage.getItem(this.key) === null ? [] : JSON.parse(localStorage.getItem(this.key));
        const index = elements.map(x => x.id).indexOf(id);
        const item = {
            id: id,
            name: newName
        }
        elements[index] = item;
        localStorage.setItem(this.key, JSON.stringify(elements));
    }

    //Remove a single item
    removeElement(id) {

        const elements = localStorage.getItem(this.key) === null ? [] : JSON.parse(localStorage.getItem(this.key));
        const index = elements.map(x => x.id).indexOf(id);
        if (index > -1) {
            elements.splice(index, 1);
        }
        localStorage.setItem(this.key, JSON.stringify(elements));
    }

    //Remove all items
    clearStorage(){
        localStorage.setItem(this.key, JSON.stringify([]));
    }

}

//Limpiando el local storage para propósitos de ejemplo
localStorage.clear();

//Creando una instancia de la clase LocalStorage
const lista = new LocalStorage('Lista');

//Agregando Elementos
lista.addElement('Amalia');
lista.addElement('Margarita');
lista.addElement('Allexa');

//Visualizando los elementos
console.log(lista.viewElements());

//Editando elemento
lista.editElement(2, 'Melanni')

//Visualizando los elementos
console.log(lista.viewElements());

//Eliminando elemento
lista.removeElement(2);

//Visualizando los elementos
console.log(lista.viewElements());

//Eliminando toda la lista
lista.clearStorage();

//Visualizando los elementos
console.log(lista.viewElements());