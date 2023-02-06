import React, { useEffect } from "react";
import Comment from "../Comment/Comment";
import { useState } from "react";

const Comments = ({ comments }) => {
	const totalComments = comments.length;
	const [images, setImages] = useState([]);

	useEffect(() => {
		// Fetches the images of the users depending on the comments length
		const url = `https://randomuser.me/api?results=${totalComments}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setImages(data.results))
			.catch((error) => alert(error));
	}, [totalComments]);

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Comments: {comments.length}</h1>
			{/* Displays the individual comment after getting the images */}
			{images.length === comments.length &&
				comments.map((comment, index) => (
					<Comment
						key={comment.id}
						comment={comment}
						image={images[index].picture.large}
					/>
				))}
		</div>
	);
};

export default Comments;
