import { model, Schema, Document } from "mongoose";

type OrderDocument = Document & {
  user: Schema.Types.ObjectId;
  products: [];
  totalPrize: number;
  shippingAddress: {};
  paymentMethod: string;
  createdAt: Date;
};

const orderSchema = new Schema<OrderDocument>({
  user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  products: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  totalPrize: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    name: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    houseNo: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    landMark: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const OrderModel = model<OrderDocument>("OrderModel", orderSchema);

export default OrderModel;
