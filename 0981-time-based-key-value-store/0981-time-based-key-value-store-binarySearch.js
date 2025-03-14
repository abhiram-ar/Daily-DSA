
var TimeMap = function () {
        this.keyvalue = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.keyvalue.get(key)) {
        this.keyvalue.set(key, [])
    }
    this.keyvalue.get(key).push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    let values = this.keyvalue.get(key) || []
    let l = 0
    let r = values.length - 1
    let res = ""
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (values[mid][0] <= timestamp) {
            res = values[mid][1]
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */