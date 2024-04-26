
export function changeCase(str, type) {
    if (type === 'uppercase') {
        return str.toUpperCase();
    } else if (type === 'lowercase') {
        return str.toLowerCase();
    } else {
        return str;
    }
}
