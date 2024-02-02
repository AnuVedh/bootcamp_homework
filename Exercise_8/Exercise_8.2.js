const names=["John","jane","Greg","Jude","Bob"];
console.log("List all Names: " +names);
const index_toRemove=names.indexOf("Greg");
if (index_toRemove !==-1){
    names.splice(index_toRemove,1);
}
console.log("After Remove: "+names);