// @flow
/**
 * convert an object into its 2D array equivalent to be turned
 * into an ES6 map
 */
export default function objectToMap<K, V>(obj: { [K]: V }): Map<K, V> {
    return new Map(
        Object.keys(obj).map(key => {
            const pair = [key, obj[key]];
            return pair;
        }),
    );
}
