let original = {
    name: "akash",
    address: {
        city: "srikakulam"
    }
};
let shallowCopy = { ...original };
let deepCopy = JSON.parse(JSON.stringify(original));

shallowCopy.address.city = "vizag";
deepCopy.address.city = "hyberabadh";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);
