import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    HoTen: {
        type: String,
        required: true
    },
    MatKhau: {
        type: String,
        required: true
    },
    SDT: {
        type: String
    },
    DiaChi: {
        type: String
    }
}, {
    timestamps: true
});
export const UserModel = mongoose.model('user', UserSchema);
