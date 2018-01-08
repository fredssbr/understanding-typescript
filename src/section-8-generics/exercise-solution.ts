/* Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map: */

class MyMap <T> {
    // Another way - the declaration of key has nothing to do with array (see interface.ts - 23)
    // private map: {[key: string]: T} = {};
    private map: Array<{key: string, item: T}>;

    constructor(){
        this.map = new Array<{key: string, item: T}>();
    }

    setItem(key: string, item: T){
        this.map.push({key, item});
    }
    getItem(key: string) {
        return this.map.filter(element => element.key == key)[0];
    }
    clear() {
        this.map.splice(0, this.map.length);
    }
    printMap() {
        this.map.forEach(element => console.log(element));
    }
}

//The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();