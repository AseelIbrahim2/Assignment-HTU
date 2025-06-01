import pool from "../config/db.js";

// Create
export const createPost = async (req, res) => {
    const { title, content } = req.body;
    const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=6c757d&color=fff&rounded=true&size=60`;
    try {
        await pool.query(
            "INSERT INTO posts (title, content, imageUrl) VALUES ($1, $2, $3)",
            [title, content, imageUrl]
        );
        res.redirect("/posts"); // رجعنا لصفحة index اللي بتعرض كل البوستات
    } catch (err) {
        console.error("Error creating post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Read
export const getPosts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts");
        res.render('index', { posts: result.rows }); // صفحة index للعرض
    } catch (err) {
        console.error("Error fetching posts:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update
export const updatePost = async (req, res) => {
    const { title, content } = req.body;
    const id = req.params.id;

    try {
        const post = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);

        if (post.rows.length === 0) {
            return res.redirect(`/posts/${id}`);
        }
        const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=6c757d&color=fff&rounded=true&size=60`;

        await pool.query(
            "UPDATE posts SET title = $1, content = $2, imageUrl = $3 WHERE id = $4",
            [title, content, imageUrl, id]
        );

        res.redirect(`/posts/${id}`); // بعد التعديل صفحة تفاصيل البوست
    } catch (err) {
        console.error("Error updating post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete
export const deletePost = async (req, res) => {
    const id = req.params.id;

    try {
        await pool.query("DELETE FROM posts WHERE id = $1", [id]);
        res.redirect("/posts"); // بعد الحذف ارجع لصفحة index
    } catch (err) {
        console.error("Error deleting post:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};









