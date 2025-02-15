import { useState } from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const activities = ["Nature", "Cooking", "Gardens", "Fishing", "Baking"];

export default function UserTags() {
  const [availability, setAvailability] = useState([]);
  const [interests, setInterests] = useState([]);

  const toggleAvailability = (day) => {
    setAvailability((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
    console.log("Added Availability = " + day);
  };

  const toggleInterest = (activity) => {
    setInterests((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity]
    );
    console.log("Added Interest = " + activity);
  };
  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Set Your Availability</h2>
      <div className="flex flex-wrap gap-2">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={`px-4 py-2 rounded border transition-all duration-300 font-bold ${availability.includes(day) ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-white text-blue-600 border-blue-600"}`}
            onClick={() => toggleAvailability(day)}
          >
            {day}
          </button>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold">Choose your Interests</h2>
      <div className="flex flex-wrap gap-2">
        {activities.map((activity) => (
          <button
            key={activity}
            className={`px-4 py-2 rounded border transition-all duration-300 font-bold ${interests.includes(activity) ? "bg-green-600 text-white border-green-600 shadow-md" : "bg-white text-green-600 border-green-600"}`}
            onClick={() => toggleInterest(activity)}
          >
            {activity}
          </button>
        ))}
      </div>
    </div>
  );
}