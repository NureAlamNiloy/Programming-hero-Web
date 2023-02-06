import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	userImage: {
		borderRadius: "50%",
		marginRight: "20px",
	},
	comment: {
		display: "flex",
		border: "1px solid lightgray",
		margin: "20px auto",
		padding: "20px",
		borderRadius: "20px",
		width: "80%",
		boxShadow: "5px 5px 10px gray",
		backgroundColor: "whitesmoke",
	},
	userCommentSection: {
		textAlign: "left",
		paddingLeft:"20px",
	},
});

const Comment = ({ comment, image }) => {
	const classes = useStyles();
	const { name, email, body } = comment;

	return (
		<div className={classes.comment}>
			<div className={classes.userImageSection}>
				<img src={image} alt={name} className={classes.userImage} />
			</div>
			<div className={classes.userCommentSection}>
				<h3>{name}</h3>
				<h4>{email}</h4>
				<p>{body}</p>
			</div>
		</div>
	);
};

export default Comment;
