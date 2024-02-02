const names=["James","Bob","John","Mary","Anne"];
console.log("List the current names: "+names);

for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
    if(names[i]=="Mary"){
        break;
    }
}
