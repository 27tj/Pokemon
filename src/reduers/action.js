export function increment(target) {
  return {
    type: "increment",
    target: target,
  };
}
export function setFavor(target) {
  return { type: "setFavor", target: target };
}
