export function capitalizeFirstLetter(s: string): string {
    if (!s) return ''
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}
