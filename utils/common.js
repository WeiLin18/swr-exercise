export const findTargetObject = (target, prop, list) => {
  return list.find((item) => item[prop] === target);
};
