//         🚀 Day 15 Challenge: Start Coding! 🚀

//Question 43
//Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = []; // Corrected spelling here
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians; // Added semicolon here
}

function show_magic(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:")
show_magic(magicians); // Shows original names
console.log("Great magicians:")
show_magic(greatMagicians); // Shows modified names




//Question 44
//Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("kabab", "cheese");
make_sandwich("kabab", "lettuce", "tomato");
make_sandwich("kabab", "cheese", "mustard", "mayo");



//Question 45: 
//Cars: Create detailed car objects with flexible properties.

function the_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: { [key: string]: any } = { manufacturer, model };
    options.forEach(([key, value]) => { 
        car[key] = value;
    });
    return car;
}

console.log(the_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(the_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
