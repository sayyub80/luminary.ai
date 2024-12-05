import { creditFee } from './../constants/index';
'use server '

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/database";
import { NextApiRequest, NextApiResponse, } from "next";
import User from "@/models/user.model";


export async function createUser(user: CreateUserParams) {
    await connectToDB();
    
    const { clerkId, email, username, firstName, lastName, photo } = user;

    // Validate input
    if (!clerkId || !email) {
      throw new Error("Missing required fields: clerkId and email.");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { clerkId },
        { email },
        { username }
      ]
    });

    if (existingUser) {
      throw new Error("User already exists with this clerkId, email, or username");
    }

    const newUser = await User.create({
      clerkId,
      email,
      username,
      firstName,
      lastName,
      photo,
    });

    console.log("User created in database:", newUser);
    return newUser.toObject();
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error)
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDB();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error)
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDB();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.log(error)
  }
}



//use credit and update

async function updateCredits(userId:string,creditFee:number) {
      try {
         await connectToDB();
          const updatedUserCredits = await User.findOneAndUpdate(
            {_id:userId},
            {$inc:{
              credits:creditFee
            }},
           {new:true}
          )
        if(!updatedUserCredits) throw new Error("User Credits update failed")
        return JSON.parse(JSON.stringify(updatedUserCredits)) 
      } catch (error) {
        console.log(error)
      }
}