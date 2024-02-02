
const names=["James","Bob","Matt","John","Mary","Anne"];
console.log("List the current names: "+names);
const newArr=names.slice().filter(name=>name!=="Mary" && name!=="Matt");
console.log(newArr);