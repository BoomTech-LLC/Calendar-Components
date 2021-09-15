export const isDefined = value => value != null;

export function combineClassNames(classNames) {
    if(!classNames || classNames.length === 0) return '';
    return ' ' + classNames.join(' ') ?? ''
}