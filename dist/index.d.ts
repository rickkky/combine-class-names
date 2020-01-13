declare function isValidClassName(className: string): boolean;
declare function traverseClassString(callback: (className: string) => void, classString: string): void;
declare type ClassNamesDist = {
    [className: string]: boolean;
};
declare type ClassNameItem = string | ClassNamesDist | undefined;
declare type ClassNames = (ClassNameItem | ClassNameItem[])[];
declare function traverseClassNames(callback: (className: string) => void, ...items: ClassNames): void;
declare const combineClassNames: (...items: (string | ClassNamesDist | ClassNameItem[] | undefined)[]) => string[];
declare function joinClassNames(...items: ClassNames): string;
export default combineClassNames;
export { combineClassNames, joinClassNames, isValidClassName, traverseClassString, ClassNamesDist, ClassNameItem, ClassNames, traverseClassNames };
