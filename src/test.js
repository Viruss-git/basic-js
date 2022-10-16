/*
function calculateHanoi(disksNumber, turnsSpeed) {
    // Расчет кол-ва шагов на основе алгоритма Фибоначчи
    function turnsNumber(disksNumber) {
        let a = 0,
            b = 3;
        for (let i = 2; i < disksNumber; i++) {
            let c = (b * 2) + 1;
            a = b;
            b = c;
        }
        return b;
    }
    let turns = turnsNumber(disksNumber);
    let seconds = Math.floor((3600 / turnsSpeed) * turns);

    console.log({ 'turns': turns, 'seconds': seconds });

    return { 'turns': turns, 'seconds': seconds };
}
console.log(calculateHanoi(31, 4540));

*/

/*
function calculateDepth(arr, count = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            count++;
            return calculateDepth(arr.flat(1), count);
        }
    }
    return count + 1;
}


console.log(calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
*/

/*
function encodeLine(str) {
    let encodeStr = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            if (count == 1) {
                encodeStr += str[i];
            } else {
                encodeStr += count + str[i];
                count = 1;
            }
        }
    }
    return encodeStr;
}


console.log(encodeLine('abbcca'));
*/

/*
function transform(arr) {
    let newArray = [];

    function doubleNext(data) {
        newArray.push(data, data);
    }
    function doublePrev(data) {
        newArray.push(data, data);
    }

    function discardNext() {

    }

    function discardPrev() {
        newArray.pop();
    }

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case '--double-next':
                if (i + 1 < arr.length) {
                    doubleNext(arr[i + 1]);
                }
                break;

            case '--double-prev':

                if (i !== 0) {
                    if (arr[i - 2] == '--double-next') {
                        console.log('Contine...1');
                    } else if (arr[i - 2] == '--discard-next') {
                        console.log('Contine...2');
                    } else {
                        doublePrev(arr[i - 1]);
                    }
                }
                break;

            case '--discard-next':
                i = i + 1;
                break;

            case '--discard-prev':
                if (arr[i - 2] == '--discard-next') {
                    console.log('Contine...3');
                } else if (arr[i - 2] == '--double-next') {
                    newArray.pop();
                    newArray.pop();
                } else {
                    discardPrev();
                }
                break;

            default:
                newArray.push(arr[i]);
                break;
        }

    }

    console.log(newArray);

}


transform(['--double-prev', 1, 2, 3]);
transform([1, 2, 3, '--double-next']);
*/

/*
function getCommonCharacterCount(s1, s2) {

    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            console.log(s1[i]);
            count++;
            s2 = s2.replace(s1[i], '');
        }
    }
    console.log(s1);
    console.log(s2);
    return count;

}

console.log(getCommonCharacterCount('aabcc', 'adcaa'));
*/