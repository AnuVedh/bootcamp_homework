function tellFortune(noofchild,p_name,geo_location,job_title)
{
    console.log("You will be a "+job_title+"  in "+geo_location+" and married to "+p_name+" with"+noofchild);
}
tellFortune(2,"Hari","Boston","SAP Consultant");
tellFortune(1,"John","Minnesotta","HR");
tellFortune(4,"Jane","California","Bank Manager");


function circleValues(radius)
{
    
   var circumference=2*Math.PI*r;
   var area=Math.PI*radius*radius;
   //console.log("Properties of a circle:")
    //console.log("Circumference: "+circumference);
    return circumference;
    return area;
}
circleValues(2);