import { use, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";


const Profile = () => {
    const { user, setUser, updateUserProfile, setLoading } = use(AuthContext);

    const [name, setName] = useState(user?.displayName || '')
    const [photo, setPhoto] = useState(user?.photoURL || '')

    const handleUpdateProfile = (e)=>{
        e.preventDefault();

        updateUserProfile(name, photo)
        .then(()=>{
            setLoading(false)
            setUser({...user, displayName: name, photoURL: photo})
            toast.success("Profile updated successfully!");
        }).catch(err=>{
            toast.error(err.message)
        })
    }

    return (
      <div>
        <div className="bg-[#eef8ed] flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-30 h-30 overflow-hidden rounded-full flex items-center justify-center">
                {user.photoURL ? (
                  <img
                    className="rounded-full h-full w-full object-cover"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                ) : (
                  <div className="bg-[#cce2cd] ">
                    <FaUser className="text-[#267442] text-5xl" />
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                {user.displayName?.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="letter-animation"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h2>

              <p className="text-gray-500 mt-2">{user.email}</p>
            </div>

            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2">
                  Display Name
                </label>

                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={user.displayName}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mb-5">
                <label className="block font-medium text-gray-700 mb-2">
                  Photo URL
                </label>

                <input
                  type="text"
                  onChange={(e) => setPhoto(e.target.value)}
                  defaultValue={user.photoURL}
                  className="input input-bordered w-full"
                />
              </div>

              <button
                type="submit"
                className="btn w-full bg-[#267442] hover:bg-[#1e6035] text-white"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Profile;