import React, { useState } from "react";

import { collection, addDoc,getFirestore } from "firebase/firestore";
import "./style.css"; 
import { app } from "../../firebase";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
 
     const db =getFirestore(app)
    try {
      // Add the blog to Firestore
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Blog added successfully!");
      setTitle("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding blog: ", error);
      alert("Error adding blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-blog-container">
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;