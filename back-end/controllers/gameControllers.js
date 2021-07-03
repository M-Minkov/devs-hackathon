import { userModel, problemModel } from '../models/gameModels.js';

let looking_to_play = [];
let match_found = {};

// function taking request to play and sending back confirmation of request

export const createUser = async (req, res) => {
    const userInfo = req.body;
    const userJSON = new userModel(userInfo);
    try {
        await userJSON.save();
        res.status(201).json(userJSON);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}


export const getProblemInfo = (req, res) => {
    res.status(200).json({"here":"OK"});
}

export const take_request = async (req, res) => {
    try {
        const user_id = req.param.id;
        res.status(200);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

// function for finding users to match
const find_user = (id) => {
    for(var user_2 in looking_to_play) {
        if(user_2 == id) {
            continue;
        }
        match_found[id] = true;
        match_found[user_2] = true;
        return user_2;
    }
}
// function for confirming whether a user has been found or not
const confirm_found = (req, res, id) => {
    if(id in found && found[id]) {
        res.status(200).json({found:true});
    }
    else {
        res.status(200).json({found:false});
    }
}

// function for returning problem information (statement)
// function for testing code against test cases
// function for
// function for sending back played result