import { model, Document, Schema } from "mongoose";


type UserDocument = Document & {
  name: string;
  email: string;
  password: string;
  verified: boolean;
  verificationToken: string | undefined;
  addresses: [];
  orders: Schema.Types.ObjectId[];
  createdAt: Date;
};

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  addresses: [
    {
      name: String,
      mobileNo: String,
      houseNo: String,
      street: String,
      landmark: String,
      city: String,
      country: String,
      postalCode: String,
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model<UserDocument>("UserModel", userSchema);

export default UserModel;
