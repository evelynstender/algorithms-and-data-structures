module.exports.reverseArray = (arr) => {
    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
};

module.exports.hourglassSum = (arr) => {
    let maxSum = -63;

    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            const first =
                arr[row][column] + arr[row][column + 1] + arr[row][column + 2];
            const second = arr[row + 1][column + 1];
            const third =
                arr[row + 2][column] +
                arr[row + 2][column + 1] +
                arr[row + 2][column + 2];

            const sum = first + second + third;

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
};

module.exports.dynamicArray = (n, queries) => {
    const arr = [...new Array(n)].map(() => []);
    const result = [];
    let lastAnswer = 0;

    queries.forEach((v) => {
        const idx = (v[1] ^ lastAnswer) % n;

        if (v[0] === 1) {
            arr[idx].push(v[2]);
        } else if (v[0] === 2) {
            lastAnswer = arr[idx][v[2] % arr[idx].length];
            result.push(lastAnswer);
        }
    });
    return result;
};

module.exports.rotateLeft = (d, arr) => {
    const result = [...arr];
    for (let i = 0; i < d; i++) {
        const shift = result.shift();
        result.push(shift);
    }

    return result;
};

module.exports.matchingStrings = (strings, queries) => {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (!result[i]) {
                result[i] = 0;
            }

            if (queries[i] === strings[j]) {
                result[i] = result[i] + 1;
            }
        }
    }

    return result;
};

module.exports.arrayManipulation = (n, queries) => {
    let max = 0;
    const params = [];

    for (let q = 0; q < queries.length; q++) {
        const query = queries[q];
        const qstart = query[0];
        const qend = query[1];
        const qval = query[2];

        params.push({
            key: qstart,
            val: qval,
        });

        params.push({
            key: qend,
            val: -qval,
        });
    }

    params.sort((item1, item2) => {
        if (item1.key === item2.key) {
            return item2.val - item1.val;
        }

        return item1.key - item2.key;
    });

    let sum = 0;

    for (let i = 0; i < params.length; i++) {
        const param = params[i];
        sum += param.val;

        if (sum > max) {
            max = sum;
        }
    }

    return max;
};
