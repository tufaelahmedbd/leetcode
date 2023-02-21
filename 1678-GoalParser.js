// Problem link: https://leetcode.com/problems/goal-parser-interpretation/?envType=study-plan&id=programming-skills-i
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let str = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      str += "o";
      i++;
    } else if (
      command[i] === "(" &&
      command[i + 1] === "a" &&
      command[i + 2] === "l"
    ) {
      str = str + "al";
      i += 3;
    } else {
      str = str + command[i];
    }
  }
  return str;
};
console.log(interpret("G()(al)"));
