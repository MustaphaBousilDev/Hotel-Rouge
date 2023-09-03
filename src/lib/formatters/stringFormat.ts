/**
 *
 * @param t  The string to capitalize
 * @returns The capitalized string
 * @description Capitalize the first letter of a string
 * @example capitalize('hello') // Hello
 */
export const capitalize = (t: string) => {
  const lower = t.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

/**
 *
 * @param t The string to format
 * @returns Formatted string
 * @description Capitalize the first letter of each word in a string
 * @example capitalizeEachWord('hello world') // Hello World
 */
export function title(t: string) {
  return t.split(' ').map(capitalize).join(' ');
}

/**
 *
 * @param t The string to format
 * @param max `optional` The maximum length of the string
 * @default 50
 * @returns Clipped string
 * @description Clip a string to a maximum length and add '...' at the end
 * @example clip('hello world', 5) // Hello...
 */
export const clip = (t: string, max = 50) =>
  t.length > max ? t.slice(0, max) + '...' : t;

/**
 * @param t The string to format
 * @returns Formatted string
 * @description Convert a string to a slug
 * @example slug('Hello wOrld') // hello-world
 * */
export const slugify = (t: string) => t.toLowerCase().replace(/ /g, '-');

export const classNames = (...classes: string[]) => classes.join(' ');

/**
 * @param base The base independent classNames
 * @param conditionals The conditional classNames
 * @returns The combined classNames
 * @description Combine classNames based conditions
 * @example conditionalClassNames('base', { 'conditional': true }) // base conditional
 */
export const clsx = (base = '', conditionals: { [key: string]: boolean }) => {
  return classNames(
    base,
    Object.entries(conditionals)
      .map(([key, value]) => (value ? key : ''))
      .join(' ')
  );
};

/**
 * @param count The count of items
 * @param singular The singular form of the word (postfix)
 * @param plural The plural form of the word (postfix)
 * @returns The formatted string depending on the count
 * @description Format a string depending on the count
 * @example pluralize(1, 'post', 'posts') // 1 post
 * pluralize(2, 'post', 'posts') // 2 posts
 * pluralize(0, 'post', 'posts') // 0 posts
 * pluralize(4, 'post') // 4 post
 */
export const pluralize = (count: number, singular: string, plural?: string) => {
  return (
    count.toString(10) +
    ' ' +
    (count === 1 ? singular : plural ?? singular + 's')
  );
};
