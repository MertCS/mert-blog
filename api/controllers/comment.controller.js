import Comment from '../models/comment.model.js';

export const createComment = async (req, res, next) => {
    try {
        const { content, postId, userId } = req.body;

        if (userId != req.user.id) {
            console.log(userId, req.userId);
            return res.status(401).json("Unauthorized");
        }

        const newComment = new Comment({
            content,
            postId,
            userId,
        });
        await newComment.save();

        res.status(201).json(newComment);
    } catch (error) {
        next(error);
    }
}