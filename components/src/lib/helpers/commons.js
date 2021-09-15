export const isDefined = value => value != null;

export function generateClassNames(classNames) {
    if(!classNames || classNames.length === 0) return '';
    return ' ' + classNames.join(' ') ?? ''
}