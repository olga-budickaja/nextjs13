import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    saved?: Schema.Types.ObjectId[];
    tags?: Schema.Types.ObjectId[];
    picture: string;
    location?: string;
    portfolioWebsite?: string;
    joinAt: Date;
    reputation?: number;
}

const UserSchema = new Schema<IUser>({
    clerkId: {
        type: String, 
        required: true,
        unique: true,
    },
    name: {
        type: String, 
        required: true,
    },
    username: {
        type: String, 
        required: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String, 
    },
    bio: {
        type: String, 
    },
    saved: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
    }],
    picture: {
        type: String, 
        required: true,
    },
    location: {
        type: String, 
    },
    portfolioWebsite: {
        type: String, 
    },
    reputation: {
        type: Number,
        default: 0,
    },
    joinAt: {
        type: Date, 
        default: Date.now,
    },
    tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }
})

const User = models.User || model('User', UserSchema);

export default User;

