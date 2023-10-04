"use server"

import { connectToDatabase } from "../mongoose"

export async function createQuestion(params: any) {
    /* eslint-disable no-empty */
    try {
        connectToDatabase();
    } catch (error) {

    }
}