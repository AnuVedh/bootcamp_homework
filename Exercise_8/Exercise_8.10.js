const names=["Greg","Mary","Devon","James"];
console.log("Before using splice: ");
console.log(names);
const remove_index=names.indexOf("Devon");
names.splice(remove_index,1);
names.splice(remove_index,0,"Elizabeth","Artie");
console.log("After adding Elizabeth and Artie: ");
console.log(names);