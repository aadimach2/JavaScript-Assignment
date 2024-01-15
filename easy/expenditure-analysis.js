/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [];
// }

// module.exports = calculateTotalSpentByCategory;
// function calculateTotalSpentByCategory(transactions) {
//   // Create an object to store total spent for each category
//   const categoryTotal = {};

//   // Iterate through each transaction
//   transactions.forEach(transaction => {
//     // Extract category and price from the transaction
//     const { category, price } = transaction;

//     // Update total spent for the category
//     if (categoryTotal[category] === undefined) {
//       // If category is not in the object, initialize it
//       categoryTotal[category] = price;
//     } else {
//       // If category is already in the object, add the price to the existing total
//       categoryTotal[category] += price;
//     }
//   });

//   // Convert accumulated totals to the desired output format
//   const result = [];

//   for (const category in categoryTotal) {
//     result.push({
//       category,
//       totalSpent: categoryTotal[category],
//     });
//   }

//   return result;
// }

function calculateTotalSpentByCategory(transactions){
  
  categoryTotal={}
  transactions.forEach(transaction=>{
    const {category,price}=transaction;
    
    
    if(categoryTotal[category]===undefined){
      categoryTotal[category]=price;

    }else{
      categoryTotal[category]+=price
    }


  });

  const result=[]
  for(const category in categoryTotal){
    result.push({
      category,
      totalSpent:categoryTotal[category]
    });
   
  }
  return result;

}










module.exports = calculateTotalSpentByCategory;
