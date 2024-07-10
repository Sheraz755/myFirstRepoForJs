// console.log("js");
// const age = 20;
// age = 34;
// console.log(age);
//objects and array are mutable
// while other data types are not mutable

const profile = {
	name: "sheraz",
	age: 26,
	isMarried: true,
	id: undefined,
	data: null,
	subClass: {
		class: "js",
	},
};
profile.name = "shahzad";

//destructure objects

const { name, age, id } = profile;

// shallow copy
const copyProfile = profile;
copyProfile.name = "abc";
console.log("copy console", copyProfile.name); //
console.log("original console", profile.name); //es5

//deep copy

const deepCopy = { ...profile }; //spread operator
deepCopy.name = "shahazad";
console.log("deepCopy console", deepCopy.name); //
console.log("original console", profile.name); //es5

document.querySelector("#profile").innerHTML = deepCopy.name;
