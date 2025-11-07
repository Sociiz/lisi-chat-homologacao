import { IAxisSet } from './engine';
/**
 * This is a file to perform common utility for OLAP and Relational datasource
 *
 * @hidden
 */
export declare class PivotExportUtil {
    static getClonedPivotValues(pivotValues: IAxisSet[][]): IAxisSet[][];
    private static getClonedPivotValueObj;
    static isContainCommonElements(collection1: Object[], collection2: Object[]): boolean;
}
