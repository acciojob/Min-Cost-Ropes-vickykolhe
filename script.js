function mincost(arr)
{ 
//write your code here
	let cost=0;
	let sum=0;
	arr.sort();
	arr.forEach((e)=>{
		sum+=e;
		cost+=sum;
	})
// return the min cost
	return cost-2;
	
  
}

module.exports=mincost;
