export function getDate(date) {
    const d = new Date(date);
    return d.toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}