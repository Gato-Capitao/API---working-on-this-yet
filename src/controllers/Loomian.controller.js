import { Loomian } from "../models/Loomian.model.js";

let loomians = []

const registrationLoomian = (id) => {
    let loomi = new Loomian(id);
    loomians.push(loomi);
    return loomi;
}

const getAllLoomians = () => {
    return loomians;
}

export {registrationLoomian, getAllLoomians};