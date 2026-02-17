import User from "../models/User.js";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "You can list cars now" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.meddages });
  }
};

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
