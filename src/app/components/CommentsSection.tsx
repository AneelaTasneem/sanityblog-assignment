"use client";

import React, { useState, useEffect } from "react";

interface Comment {
  name: string;
  comment: string;
}

const CommentsSection = () => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // Set isMounted to true after the component mounts
    setIsMounted(true);

    // Load comments from localStorage
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]") as Comment[];
    setComments(savedComments);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Save comments to localStorage whenever they change
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments, isMounted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() && comment.trim()) {
      const newComment: Comment = { name, comment };
      setComments([newComment, ...comments]);
      setName("");
      setComment("");
    }
  };

  // Prevent rendering until the component is mounted
  if (!isMounted) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-white dark:bg-black p-6 ">
      <div className="max-w-2xl mx-auto dark:bg-purple-400 p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Comments Section</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Your Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Enter your comment"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">All Comments</h2>
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
                <p className="font-medium text-purple-800">{item.name}</p>
                <p className="text-gray-700">{item.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
