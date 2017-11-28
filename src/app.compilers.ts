const compilers : () => void = () => {
    let myName: string = "Fred";
    let myAge: number = 30;
    let anything;
    anything = 12;

    function controlMe(isTrue: boolean, somethingElse: boolean){
        let result: number;
        if(isTrue && somethingElse){
            result = 12;
        }
        result = 33;
        return result;
    }

    console.log(controlMe(true, true));

};

compilers();

