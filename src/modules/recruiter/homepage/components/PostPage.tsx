import React from "react";
import { FaHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";

interface Post {
  id: number;
  author: string;
  position: string;
  time: string;
  content: string;
  image?: string;
  repostedBy?: string;
}

const posts: Post[] = [
  {
    id: 1,
    author: "Jane Cooper",
    position: "Product Manager at TechCorp",
    time: "2 hours ago",
    content: "Just published a new article on product management best practices. Check it out and let me know your thoughts!",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    author: "Modest Mitkus",
    position: "Fullstack Developer",
    time: "2 hours ago",
    content: "Excited to announce that we're hiring frontend developers! If you're passionate about React and modern web technologies, send me a message.",
    image: "https://picsum.photos/200/300",
    repostedBy: "Melissa",
  },
  {
    id: 1,
    author: "Jane Cooper",
    position: "Product Manager at TechCorp",
    time: "2 hours ago",
    content: "Just published a new article on product management best practices. Check it out and let me know your thoughts!",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    author: "Modest Mitkus",
    position: "Fullstack Developer",
    time: "2 hours ago",
    content: "Excited to announce that we're hiring frontend developers! If you're passionate about React and modern web technologies, send me a message.",
    image: "https://picsum.photos/200/300",
    repostedBy: "Melissa",
  },
];

const FeedsPostPage: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
          {post.repostedBy && (
            <p className="text-sm text-gray-500 mb-1">{post.repostedBy} reposted</p>
          )}
          <div className="flex items-start space-x-3">
            <img
              src="https://picsum.photos/200/300"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.position} · {post.time}</p>
                </div>
                <FaEllipsisH className="text-gray-500 cursor-pointer" />
              </div>
              <p className="mt-2 mb-2 text-gray-700">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Image"
                  className="mt-3 w-full max-h-60 rounded-lg object-cover"
                />
              )}
              <div className="flex items-center space-x-4 mt-3 text-gray-500">
                <FaHeart className="cursor-pointer hover:text-red-500" />
                <FaRegComment className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default FeedsPostPage;
