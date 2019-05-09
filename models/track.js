import mongoose from "mongoose";
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  title: String,
  releaseDate: String,
  duration: String,
  artist: {
    id: string,
    name: string
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Track", trackSchema);
