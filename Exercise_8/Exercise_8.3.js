const names=["John","jane","Greg","James","Bob"];
console.log("List all Names: " +names);
const index_toRemove=names.indexOf("James");
if (index_toRemove !==-1){
    names.splice(index_toRemove,1);
}
console.log("After Remove: "+names);