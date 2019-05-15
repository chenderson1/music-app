import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  imgUrl: {
    type: String,
    default: "http://wiseheartdesign.com/images/articles/default-avatar.png"
  },
  password: {
    required: true,
    type: String
  },
  name: String,
  favAlbums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album"
    }
  ],
  favTracks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Track"
    }
  ]
});
userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};
userSchema.methods.withoutPassword = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default mongoose.model("User", userSchema);
