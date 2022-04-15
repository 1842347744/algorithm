// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// 双指针 右移， 将 prev.next指向curr
var reverseList = function(head) {
    let curr = null;
    let prev = head;
    while (prev) {
      const next = prev.next;
      prev.next = curr;
      curr = prev;
      prev = next;
    }
    return curr
};
