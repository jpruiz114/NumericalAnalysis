// ok
//var strDividend = "1321654515616165165";
//var strDivisor = "2223654";

// ok
//var strDividend = "4230";
//var strDivisor = "12";

// ok
//var strDividend = "999999999";
//var strDivisor = "909";

// ok
//var strDividend = "987654";
//var strDivisor = "123";

// ok
//var strDividend = "1111111111";
//var strDivisor = "666";

// ok
//var strDividend = "10";
//var strDivisor = "2";

// ok
//var strDividend = "8";
//var strDivisor = "2";

var strDividend = "1";
var strDivisor = "1";

var arrDividend = strDividend.split("");
var arrDivisor = strDivisor.split("");

/**
 *
 * @type {string}
 */
const ARRAY_NUMBER_LOWER = 'lower';

/**
 *
 * @type {string}
 */
const ARRAY_NUMBER_EQUAL = 'equal';

/**
 *
 * @type {string}
 */
const ARRAY_NUMBER_BIGGER = 'bigger';

/* ***** */

// 999 vs 1234 - lower
//console.log(aComparedToB(['9', '9', '9'], ['1', '2', '3', '4']));

// 123 vs 456 - lower
//console.log(aComparedToB(['1', '2', '3'], ['4', '5', '6']));

// 1234 vs 999 - bigger
//console.log(aComparedToB(['1', '2', '3', '4'], ['9', '9', '9']));

// 1234 vs 1234 - equal
//console.log(aComparedToB(['1', '2', '3', '4'], ['1', '2', '3', '4']));

// 1234 vs 1212 - bigger
//console.log(aComparedToB(['1', '2', '3', '4'], ['1', '2', '1', '2']));

//console.log(multiply([1, 2, 3], [7, 8, 9]));

//console.log(multiply([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));

/*console.log(
    printAsString(
        multiply(
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
        )
    )
);*/

/*console.log(
    "result = " +
    subtract(
        [1, 2, 3, 4],
        [9, 8, 7]
    )
);*/

/*console.log(
    "result = " +
    subtract(
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    )
);*/

/* ***** */

var divisionResult = divide(arrDividend, arrDivisor);
console.dir(divisionResult);

/**
 *
 * @param array
 * @returns {string}
 */
function printAsString(array) {
    return array.join("");
}

/**
 *
 * @param dividend
 * @param divisor
 * @returns {Array}
 */
function divide(dividend, divisor) {
    var divisionResult = [];
    divisionResult['result'] = [];
    divisionResult['remainder'] = [];

    var numOfElements = 1;

    var arrFirstDividendElements;

    var shouldKeepGettingMore = false;

    if (dividend.length >= divisor.length) {
        console.log("dividend = " + printAsString(dividend));
        console.log("divisor = " + printAsString(divisor));

        var maxMultiplier = null;

        var divisorPerMaxMultiplier = null;

        var newNumber = null;

        do {
            console.log("numOfElements" + " = " + numOfElements);

            arrFirstDividendElements = getFirstElementsOfArray(numOfElements, dividend);
            console.log("current attempt" + " = " + printAsString(arrFirstDividendElements));

            var comparisonResult = aComparedToB(arrFirstDividendElements, divisor);
            console.log(printAsString(arrFirstDividendElements) + " is " + comparisonResult + " than " + printAsString(divisor));

            if (comparisonResult == ARRAY_NUMBER_LOWER) {
                shouldKeepGettingMore = true;

                numOfElements++;
            } else if (comparisonResult == ARRAY_NUMBER_EQUAL || comparisonResult == ARRAY_NUMBER_BIGGER) {
                shouldKeepGettingMore = false;
            }
        } while (shouldKeepGettingMore);

        console.log("going with " + printAsString(arrFirstDividendElements));

        var newNumberComparison = null;

        do {
            //console.log("newNumberComparison" + " = " + newNumberComparison);

            if (newNumberComparison == ARRAY_NUMBER_LOWER && numOfElements == dividend.length) {
                console.log("got to the end of the operation, what's left should be the remainder");

                divisionResult['result'].push(0);

                console.dir(newNumber);

                break;
            }

            if (arrFirstDividendElements.length == 1 && arrFirstDividendElements[0] == 0) {
                maxMultiplier = 0;
            } else {
                maxMultiplier = findMaximumMultiplier(arrFirstDividendElements, divisor);
            }

            console.log("maxMultiplier = " + maxMultiplier);

            divisionResult['result'].push(maxMultiplier);

            divisorPerMaxMultiplier = multiply(divisor, [maxMultiplier]);
            console.log("divisorPerMaxMultiplier = " + printAsString(divisorPerMaxMultiplier));

            var subtractionResult = subtract(arrFirstDividendElements, divisorPerMaxMultiplier);
            console.log("subtractionResult = " + printAsString(subtractionResult));

            console.log("numOfElements" + " = " + numOfElements);

            newNumber = purgeZerosFromArray(subtractionResult.concat(dividend[numOfElements++]));

            if (newNumber.length == 0) {
                newNumber = [0];
            }

            console.log("newNumber = " + printAsString(newNumber));

            console.dir(newNumber);

            /* ***** */

            do {
                newNumberComparison = aComparedToB(newNumber, divisor);
                console.log("newNumberComparison = " + newNumberComparison);

                console.log("numOfElements = " + numOfElements);

                if (newNumberComparison == ARRAY_NUMBER_LOWER && numOfElements < dividend.length) {
                    newNumber = newNumber.concat(dividend[numOfElements++]);
                    console.log("newNumber = " + printAsString(newNumber));

                    console.log("pushing 0 to result");

                    divisionResult['result'].push(0);
                } else {
                    console.log("breaking loop");

                    break;
                }
            } while (newNumberComparison == ARRAY_NUMBER_LOWER);

            /* ***** */

            arrFirstDividendElements = newNumber;
            console.log("arrFirstDividendElements = " + printAsString(arrFirstDividendElements));
        } while (numOfElements <= dividend.length);

        // @todo: Fix this bug that adds undefined in the last position of the newNumber array.
        if (newNumber[newNumber.length - 1] === null || newNumber[newNumber.length - 1] === undefined) {
            newNumber.pop();
        }

        // If the new number is empty, it means the remainder is zero.
        if (newNumber.length == 0) {
            newNumber = [0];
        }

        divisionResult['remainder'] = newNumber;
    } else {
        // @todo
    }

    console.log(printAsString(dividend) + " / " + printAsString(divisor) + " = " + printAsString(divisor) + " x " + printAsString(divisionResult['result']) + " + " + printAsString(divisionResult['remainder']));

    return divisionResult;
}

/**
 *
 * @param s
 * @returns {string}
 */
function reverseString(s) {
    return s.split("").reverse().join("");
}

/**
 *
 * @param n
 * @returns {string}
 */
function getZeros(n) {
    var strZeros = "";

    for (var i=0; i<n; i++) {
        strZeros += "0";
    }

    return strZeros;
}

/**
 *
 * @param array
 * @returns {number}
 */
function getMaxLength(array) {
    var maxLength = 0;

    var currentElement = "";

    for (var i=0; i<array.length; i++) {
        currentElement = array[i];

        if (currentElement.length > maxLength) {
            maxLength = currentElement.length;
        }
    }

    return maxLength;
}

/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
function multiply(a, b) {
    var result = [];

    if (a && b) {
        var topNumber;
        var bottomNumber;

        if (a.length > b.length) {
            topNumber = a;
            bottomNumber = b;
        }

        if (a.length < b.length) {
            topNumber = b;
            bottomNumber = a;
        }

        if (a.length == b.length) {
            topNumber = a;
            bottomNumber = b;
        }

        var m1, m2;

        var numSubResult;
        var strSubResult;

        var subResultParts;

        var strSave;
        var numSave = 0;

        var rows = [];
        var currentRow = "";
        var rowIndex = 0;

        for (var i = bottomNumber.length - 1; i >= 0; i--) {
            currentRow = "";

            for (var j = topNumber.length - 1; j >= 0; j--) {
                m1 = bottomNumber[i];
                m2 = topNumber[j];

                numSubResult = m1 * m2;

                if (numSave != 0) {
                    numSubResult += numSave;
                }

                // As a string
                strSubResult = "" + numSubResult;

                // As an array
                subResultParts = strSubResult.split("");

                // If is the last iteration...

                if (j == 0) {
                    currentRow += reverseString(subResultParts.join(""));
                } else {
                    // Get last element from subResultParts
                    currentRow += subResultParts[subResultParts.length - 1];

                    subResultParts.splice(-1, 1);

                    strSave = subResultParts.join("");

                    numSave = strSave != "" ? parseInt(strSave) : 0;
                }
            }

            currentRow = reverseString(currentRow) + getZeros(rowIndex);

            numSave = 0;

            rows[rowIndex++] = currentRow;
        }

        var rowsMaxLength = getMaxLength(rows);

        var zerosLeft = 0;

        for (var i=0; i<rows.length; i++) {
            zerosLeft = rowsMaxLength - rows[i].length;

            if (zerosLeft > 0) {
                rows[i] = getZeros(zerosLeft) + rows[i];
            }

            rows[i] = rows[i].split("");
        }

        var numSubSum = 0, strSubSum = "", arrSubSum = null;
        var lastElemArrSubSum;
        var strAccumulated = "", numAccumulated = 0;

        for (var j=rowsMaxLength - 1; j>=0; j--) {
            numSubSum = 0;

            for (var i=0; i<rows.length; i++) {
                numSubSum += parseInt(rows[i][j]);
            }

            if (numAccumulated != 0) {
                numSubSum += numAccumulated;
            } // End of the for.

            strSubSum = "" + numSubSum;

            arrSubSum = strSubSum.split("");

            lastElemArrSubSum = parseInt(arrSubSum[arrSubSum.length - 1]);

            result.push(lastElemArrSubSum);

            arrSubSum.splice(-1, 1);

            strAccumulated = arrSubSum.join("");

            numAccumulated = strAccumulated == "" ? 0 : parseInt(strAccumulated);
        } // End of the for.

        result.reverse();
    } else {
        // @todo
    }

    console.log(printAsString(a) + " x " + printAsString(b) + " = " + printAsString(result));

    return result;
}

/**
 *
 * @param dividend
 * @param divisor
 * @returns {*}
 */
function findMaximumMultiplier(dividend, divisor) {
    // The dividend for this tool must be bigger or equal to the divisor.

    var validationComparison = aComparedToB(dividend, divisor);

    if (validationComparison == ARRAY_NUMBER_LOWER) {
        console.error("Dividend must be bigger or equal to the divisor");
    }

    var result;

    var multiplier = 2;

    var keepLooking = true;

    var currentResult;
    var comparison;

    do {
        currentResult = multiply(divisor, [multiplier]);

        comparison = aComparedToB(currentResult, dividend);

        if (comparison == ARRAY_NUMBER_LOWER) {
            keepLooking = true;

            multiplier++;
        }

        if (comparison == ARRAY_NUMBER_EQUAL) {
            keepLooking = false;

            result = multiplier;
        }

        if (comparison == ARRAY_NUMBER_BIGGER) {
            keepLooking = false;

            result = multiplier - 1;
        }
    } while (keepLooking);

    return result;
}

/**
 *
 * @param limit
 * @param array
 * @returns {Array}
 */
function getFirstElementsOfArray(limit, array) {
    var result = [];

    var i = 0;

    if (array) {
        for (i=0; i<limit; i++) {
            result[i] = array[i];
        }
    } else {
        // @todo;
    }

    return result;
}

/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
function aComparedToB(a, b) {
    var result;

    if (a && b) {
        var aLength = a.length;
        var bLength = b.length;

        if (aLength < bLength) {
            result = ARRAY_NUMBER_LOWER;
        } else if (aLength == bLength) {
            var firstItemOfA = parseInt(a[0]);
            var firstItemOfB = parseInt(b[0]);

            if (firstItemOfA < firstItemOfB) {
                result = ARRAY_NUMBER_LOWER;
            } else if (firstItemOfA > firstItemOfB) {
                result = ARRAY_NUMBER_BIGGER;
            } else {
                result = ARRAY_NUMBER_EQUAL;

                var currentItemA;
                var currentItemB;

                for (var i=1; i<aLength; i++) {
                    currentItemA = parseInt(a[i]);
                    currentItemB = parseInt(b[i]);

                    if (currentItemA < currentItemB) {
                        result = ARRAY_NUMBER_LOWER;
                        break;
                    }

                    if (currentItemA > currentItemB) {
                        result = ARRAY_NUMBER_BIGGER;
                        break;
                    }
                }
            }
        } else {
            result = ARRAY_NUMBER_BIGGER;
        }
    } else {
        // @todo
    }

    return result;
}

/**
 *
 * @param array
 * @returns {*}
 */
function purgeZerosFromArray(array) {
    if (array) {
        //console.log("array" + " = " + array);

        for (var i=0; i<array.length; i++) {
            if (array[i] == 0) {
                array.splice(i, 1);

                // Since the splice method decreases the array length in one.
                i--;
            } else {
                break;
            }
        }

        //console.log("array" + " = " + array);
    } else {
        // @todo
    }

    return array;
}

/**
 *
 * @param topElement
 * @param bottomElement
 * @returns {*}
 */
function subtract(topElement, bottomElement) {
    var result = [];

    if (topElement && bottomElement) {
        if (topElement.length >= bottomElement.length) {
            var delta = 0;

            if (topElement.length != bottomElement.length) {
                delta = topElement.length - bottomElement.length;
            }

            var zeros = null;

            if (delta != 0) {
                zeros = getZerosArray(delta);
            }

            if (zeros) {
                bottomElement = zeros.concat(bottomElement);
            }

            console.log("topElement" + " = " + topElement);
            console.log("bottomElement" + " = " + bottomElement);

            var carry = 0;

            for (var i=topElement.length - 1; i>=0; i--) {
                var numCurrentTopElement = parseInt(topElement[i]);

                if (carry != 0) {
                    if (numCurrentTopElement == 0) {
                        numCurrentTopElement = 10 - carry;

                        carry = 1;
                    } else {
                        numCurrentTopElement -= carry;

                        carry = 0;
                    }
                }

                //console.log("numCurrentTopElement" + " = " + numCurrentTopElement);

                var numCurrentBottomElement = parseInt(bottomElement[i]);
                //console.log("numCurrentBottomElement" + " = " + numCurrentBottomElement);

                if (numCurrentTopElement >= numCurrentBottomElement) {
                    result = [numCurrentTopElement - numCurrentBottomElement].concat(result);

                    /*if (carry != 1) {
                        carry = 0;
                    }*/
                } else {
                    result = [parseInt("1" + numCurrentTopElement) - numCurrentBottomElement].concat(result);

                    carry = 1;
                }
            }
        } else {
            // @todo
        }
    } else {
        // @todo
    }

    result = purgeZerosFromArray(result);

    if (result.length == 0) {
        result = [0];
    }

    console.log(printAsString(topElement) + " - " + printAsString(bottomElement) + " = " + printAsString(result));

    return result;
}

/**
 *
 * @param length
 * @returns {*}
 */
function getZerosArray(length) {
    var resultArray;

    if (length) {
        resultArray = [];

        for (var i=0; i<length; i++) {
            resultArray.push(0);
        }
    } else {
        // @todo
    }

    return resultArray;
}
