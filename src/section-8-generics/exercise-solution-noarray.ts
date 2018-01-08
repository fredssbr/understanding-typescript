/* Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map: */

class MyMap <T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T){
        this.map[key] = item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for(let key in this.map){
            console.log(key, this.map[key]);
        }
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