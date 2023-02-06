import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	const [user, setUser] = useState({});
	const [comments, setComments] = useState([]);

	const { id, userId, title, body } = post;
	const { name } = user;

	useEffect(() => {
		// Fetches the post of the selected id
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => response.json())
			.then((data) => (data ? setPost(data) : alert("Post not found")))
			.catch((error) => alert("Post not found"));

		// Retrieves the user of the post
		if (userId) {
			fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then((response) => response.json())
				.then((data) => setUser(data))
				.catch((error) => alert("User not found"));

			// Retrieves the comments of the post
			fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
				.then((response) => response.json())
				.then((data) => setComments(data))
				.catch((error) => alert("Comments not found"));
		}
	}, [postId, userId]);

	return (
		<>
			<div
				style={{
					textAlign: "center",
					margin: "30px auto 50px",
					backgroundColor: "wheat",
					color: "black",
					padding: "40px",
					borderRadius: "20px",
					width: "80%",
					boxShadow: "5px 5px 20px lightgray",
				}}
			>
				<h1>{id || 0}</h1>
				<h2>{title}</h2>
				<p>
					<small>{name}</small>
				</p>
				<p>{body}</p>
			</div>

			{/* Display all comments  */}
			<Comments comments={comments} />
		</>
	);
};

export default PostDetails;
