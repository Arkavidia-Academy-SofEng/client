import { useState } from "react";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

const dummyNotifications: Notification[] = [
  { id: 1, message: "Alice sent you a message.", timestamp: "2m ago" },
  { id: 2, message: "Bob liked your post.", timestamp: "10m ago" },
  { id: 3, message: "Charlie mentioned you in a comment.", timestamp: "1h ago" },
  { id: 4, message: "System update completed.", timestamp: "Yesterday" },
];

const Notifications = () => {
  const [notifications] = useState<Notification[]>(dummyNotifications);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="space-y-2">
          {notifications.map((notif) => (
            <li key={notif.id} className="p-3 bg-gray-100 rounded-md flex justify-between items-center">
              <span>{notif.message}</span>
              <span className="text-gray-500 text-sm">{notif.timestamp}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No new notifications at the moment.</p>
      )}
    </div>
  );
};

export default Notifications;
