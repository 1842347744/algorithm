// 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

// 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

// 输入: list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// 输出: ["Shogun"]

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let map = new Map();
    let sum = list1.length + list2.length;
    let arr = [];
    for(let i = 0; i< list1.length; i++){
        if(list2.includes(list1[i])) {
            if(sum > i + list2.indexOf(list1[i])) {
                sum = i + list2.indexOf(list1[i]);
                map.clear()
                map.set(list1[i], i + list2.indexOf(list1[i]))
            } else if(sum === i + list2.indexOf(list1[i])) {
                map.set(list1[i], i + list2.indexOf(list1[i]))
            }
        }
    }
    for (let [k, v] of map) {
        arr.push(k)
    }
    return arr
};
// let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
// let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun", 'KFC']
// console.log(findRestaurant(list1, list2), 'jjjjj'); 