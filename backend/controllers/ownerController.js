import imagekit from "../configs/imageKit.js";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

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

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transform: [{ width: "1280" }, { quality: "auto" }, { format: "webp" }],
    });

    const image = optimizedImageUrl;
    await Car.create({ ...car, owner: _id, image });

    res.json({ succes: true, message: "Car added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const getOwnerCars = async (req, res) => {
  try {
    const { _id } = req.user;
    const cars = await Car.find({ owner: _id });
    res.json({ succes: true, cars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const carAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.find(carId);

    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unautorized" });
    }

    car.isAvailable = !car.isAvailable;

    await car.save();

    res.jsom({ succes: true, message: "Availabilty Changed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.find(carId);

    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unautorized" });
    }

    car.owner = null;
    car.isAvailable = false;

    await car.save();

    res.jsom({ succes: true, message: "Car Removed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;

    if (role !== "owner") {
      return res.json({ success: false, message: "Unautorized" });
    }

    const cars = await Car.find({ owner: _id });
    const bookings = (await Booking.find({ owner: _id }).populate("car")).sort({
      createdAt: -1,
    });

    const pendingBookings = await Booking.find({
      owner: _id,
      status: "pending",
    });
    const completedBookings = await Booking.find({
      owner: _id,
      status: "completed",
    });

    const monthlyRevenue = bookings
      .slice()
      .filter((booking) => booking.status === "confirmed")
      .reduce((acc, booking) => acc + booking.price, 0);

    const getDashboardData = {
      totalCars: cars.length,
      totalBookings: bookings.length,
      pendingBookings: pendingBookings.length,
      completedBookings: completedBookings.length,
      recentBookings: bookings.slice(0, 3),
      monthlyRevenue,
    };
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const updateUserImage = async (req, res) => {
  try {
    const { _id } = req.user;
    const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/users",
    });

    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transform: [{ width: "400" }, { quality: "auto" }, { format: "webp" }],
    });

    const image = optimizedImageUrl;

    await User.findByIdAndUpdate(_id, { image });

    res.json({ succes: true, message: "Image Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
