const fs = require("fs");

// Load the JSON data
const data = JSON.parse(fs.readFileSync("intolerance-data.json", "utf8"));

// Create a map to track the occurrence of each name
const nameMap = new Map();

// Track duplicates
const duplicates = [];

// Iterate over the data
data.forEach((item) => {
  const name = item.name;
  if (nameMap.has(name)) {
    // If the name is already in the map, it's a duplicate
    duplicates.push(name);
  } else {
    // Otherwise, add the name to the map
    nameMap.set(name, true);
  }
});

// Output the duplicates
if (duplicates.length > 0) {
  console.log("Duplicate names found:");
  console.log(duplicates);
} else {
  console.log("No duplicate names found.");
}
