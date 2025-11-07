/**
 * This is a file to perform common utility for OLAP and Relational datasource
 *
 * @hidden
 */
var PivotExportUtil = /** @class */ (function () {
    function PivotExportUtil() {
    }
    PivotExportUtil.getClonedPivotValues = function (pivotValues) {
        var clonedSets = [];
        for (var i = 0; i < pivotValues.length; i++) {
            if (pivotValues[i]) {
                clonedSets[i] = [];
                for (var j = 0; j < pivotValues[i].length; j++) {
                    if (pivotValues[i][j]) {
                        clonedSets[i][j] =
                            this.getClonedPivotValueObj(pivotValues[i][j]);
                    }
                }
            }
        }
        return clonedSets;
    };
    PivotExportUtil.getClonedPivotValueObj = function (data) {
        var keyPos = 0;
        var framedSet = {};
        if (!(data === null || data === undefined)) {
            var fields = Object.keys(data);
            while (keyPos < fields.length) {
                framedSet[fields[keyPos]] = data[fields[keyPos]];
                keyPos++;
            }
        }
        else {
            framedSet = data;
        }
        return framedSet;
    };
    PivotExportUtil.isContainCommonElements = function (collection1, collection2) {
        for (var i = 0, cnt = collection1.length; i < cnt; i++) {
            for (var j = 0, lnt = collection2.length; j < lnt; j++) {
                if (collection2[j] === collection1[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    return PivotExportUtil;
}());
export { PivotExportUtil };
