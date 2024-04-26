export function filterArray(arr, condition) {
    return arr.filter(item => eval(condition));
}
