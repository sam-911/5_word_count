#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to Count The Words."
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Words is ${words.length}`);
