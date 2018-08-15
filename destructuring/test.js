"use strict";

function destructuring({fname = "bob", lname = "boberson", greeting = "hey", ending = "...", ...rest} = {}) {
    rest = rest || {};
    console.log(`${greeting} ${fname} ${lname}${ending} ${Object.keys(rest).reduce((a, v) => a.concat(' ' + rest[v]), '')}`);
}

function despacito(a = "testing", {another = "another"})
{

}


exports.destructuring = destructuring;
