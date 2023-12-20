const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seedFruits = document.getElementsByClassName("seed");
  console.log(seedFruits);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedlessFruits = document.getElementsByClassName("seedless");
  console.log(seedlessFruits);
  // 3. Get first seedless fruit element
  // Your code here
  // const firstSeedlessFruits = document.getElementsByClassName("seedless")
  console.log(seedlessFruits[0]);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const youSpan = document.getElementById("wrapper");
  const ptag = youSpan.childNodes[1].childNodes[1];
  console.log(ptag);
  // 5. Get all children of element "wrapper"
  // Your code here
  console.log(youSpan.childNodes);
  // 6. Get all odd number list items in the list
  // Your code here
  const oddList = document.getElementsByClassName("odd");
  console.log(oddList);
  // 7. Get all even number list items in the list
  // Your code here
  const evenList = document.getElementById("two");
  console.log(evenList.childNodes)
  console.log(
    evenList.childNodes[5].childNodes[3],
    evenList.childNodes[5].childNodes[7]
  );
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
    const techCompany = document.body.children[3].children[2].children[0, 1]
    console.log(techCompany)
  // 9. Get "Amazon" list element
  // Your code here

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
};

window.onload = select;
