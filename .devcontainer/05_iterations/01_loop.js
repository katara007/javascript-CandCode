// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //  console.log(`inner loop value: ${j} and outer loop value: ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break and Continue

// 

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i: ${index}`);
    
}
