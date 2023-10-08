"use server"

import Question from "../models/question.model";
import Tag from "../models/tag.model";
import { connectToDatabase } from "../mongoose"

export async function createQuestion(params: any) {
    try {
        connectToDatabase();

        const { title, content, tags, author, path } = params;

        const question = await Question.create({
            title,
            content,
            author
        });
    
        const tagDocuments = [];
        // Create the tags or get them if they already exist 
        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } },
                { $setOnInsert: { name: tag }, $push: { question: question._id } },
                { upsert: true, new: true }
            );
    
            tagDocuments.push(existingTag._id);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        });

        // Create an interaction record for the user`s
    } catch (error) {
        console.log(error)
    }
}