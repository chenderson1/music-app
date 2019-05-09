import mongoose from "mongoose";
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  title: String,
  id: Number,
  release_date: String,
  duration: Number,
  artist: {
    id: Number,
    name: String,
    picture: String
  },
  album: Object,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Track", trackSchema);
