//problem link: https://leetcode.com/problems/n-ary-tree-preorder-traversal/?envType=study-plan&id=programming-skills-i

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, output = []) {
  // If we start with no root or we reach a null value return the output
  if (!root) return output;
  // Add the current root val to the output on each call
  output.push(root.val);
  // Repeat for all of the root's children
  for (const child of root.children) {
    preorder(child, output);
  }
  return output;
};
console.log(preorder([1, null, 3, 2, 4, null, 5, 6]));
