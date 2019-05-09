import mongoose from "mongoose";
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: String,
  releaseDate: String,
  duration: String,
  artist: {
    id: string,
    name: string
  },
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Track"
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Album", albumSchema);
