import mongoose from "mongoose";
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: String,
  id: {
    type: Number,
    unique: true
  },
  cover: String,
  release_date: String,
  duration: Number,
  artist: {
    id: Number,
    name: String,
    picture: String
  },
  tracks: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Album", albumSchema);
