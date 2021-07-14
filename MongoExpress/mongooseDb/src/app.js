//connection & database
import { connect, Schema, model } from "mongoose";
connect("mongodb://localhost:27017/NodeTraining")
    .then(() => { console.log("Connection Created Suucessfully") })
    .catch((err) => { console.log(err) });

//schema
const trainingSchema = new Schema({
    topic: String,
    date: Date,
    folders: Number,
    level: Number,
    active: Boolean
});

//collection
const Training = new model("Training", trainingSchema);

// inserting multiple documents
// const createDoc = async () => {
//     try {
//         const programming = new Training({
//             topic: 'Vanilla Js',
//             date: 2021 - 03 - 25,
//             folders: 1,
//             level: 2,
//             active: true
//         });
//         const express = new Training({
//             topic: 'express',
//             date: 2021 - 03 - 30,
//             folders: 1,
//             level: 3,
//             active: true
//         });
//         const React = new Training({
//             topic: 'React',
//             date: 2021 - 04 - 1,
//             folders: 1,
//             level: 4,
//             active: true
//         });
//         const result = await Training.insertMany([programming, express, React]);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// createDoc();

//Read Document
const getDoc = async () => {
    try {
        const Data = await Training.find({ topic: "React" }).select({ topic: 1 });
        console.log(Data);
    } catch (err) {
        console.log(err);
    }
}

getDoc();


