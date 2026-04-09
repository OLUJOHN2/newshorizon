import { useState } from "react";
import { ThumbsUp, MessageCircle, Trash2 } from "lucide-react";
import { useCommentsStore, type Comment } from "../../store/useCommentsStore";
import { useAuthStore } from "../../store/useAuthStore";

interface CommentsProps {
  articleId: string;
}

function CommentCard({
  comment,
  articleId,
}: {
  comment: Comment;
  articleId: string;
}) {
  const { user } = useAuthStore();
  const { deleteComment, likeComment } = useCommentsStore();
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [showReplies, setShowReplies] = useState(false);
  const { addReply } = useCommentsStore();

  const handleReplySubmit = () => {
    if (replyContent.trim()) {
      addReply(articleId, comment.id, user?.name || "Anonymous", replyContent);
      setReplyContent("");
      setIsReplying(false);
      setShowReplies(true);
    }
  };

  const timeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="border-b py-4">
      <div className="flex gap-3 sm:gap-4">
        <img
          src={comment.avatar}
          alt={comment.author}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-sm text-gray-900">
              {comment.author}
            </p>
            <span className="text-xs text-gray-500">{timeAgo(comment.timestamp)}</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{comment.content}</p>
          <div className="flex gap-4 text-xs">
            <button
              onClick={() => likeComment(articleId, comment.id)}
              className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{comment.likes > 0 ? comment.likes : ""}</span>
            </button>
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Reply
            </button>
            {user?.name === comment.author && (
              <button
                onClick={() => deleteComment(articleId, comment.id)}
                className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-3 mb-3 p-3 bg-gray-50 rounded-lg">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                className="w-full text-sm p-2 border rounded-lg resize-none focus:outline-none focus:border-red-400"
                rows={2}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleReplySubmit}
                  disabled={!replyContent.trim()}
                  className="px-3 py-1.5 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition disabled:bg-gray-300"
                >
                  Reply
                </button>
                <button
                  onClick={() => setIsReplying(false)}
                  className="px-3 py-1.5 border text-xs rounded hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Replies */}
          {comment.replies.length > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="text-xs text-red-500 hover:text-red-600 mt-2 font-medium"
            >
              {showReplies ? "Hide" : "Show"} {comment.replies.length} repl
              {comment.replies.length === 1 ? "y" : "ies"}
            </button>
          )}

          {showReplies &&
            comment.replies.map((reply) => (
              <div key={reply.id} className="mt-3 ml-0 sm:ml-4 bg-gray-50 p-2 sm:p-3 rounded-lg">
                <div className="flex gap-2 sm:gap-3">
                  <img
                    src={reply.avatar}
                    alt={reply.author}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-xs sm:text-sm text-gray-900">
                        {reply.author}
                      </p>
                      <span className="text-xs text-gray-500">
                        {timeAgo(reply.timestamp)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">
                      {reply.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function Comments({ articleId }: CommentsProps) {
  const { user } = useAuthStore();
  const { comments, addComment } = useCommentsStore();
  const [content, setContent] = useState("");

  const articleComments = comments[articleId] || [];

  const handleSubmit = () => {
    if (content.trim() && user?.name) {
      addComment(articleId, user.name, content);
      setContent("");
    }
  };

  return (
    <section className="mt-12 pt-8 border-t">
      <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 font-serif">
        Comments ({articleComments.length})
      </h2>

      {/* Comment Form */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-8">
        {user ? (
          <div>
            <div className="flex gap-3 mb-3">
              <img
                src={`https://i.pravatar.cc/40?img=${user.name
                  .split("")
                  .reduce((acc, c) => acc + c.charCodeAt(0), 0) % 70}`}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">Signed in</p>
              </div>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write a thoughtful comment..."
              className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:border-red-400 text-sm"
              rows={3}
            />
            <div className="flex gap-2 mt-3 justify-end">
              <button
                onClick={() => setContent("")}
                className="px-4 py-2 border text-sm rounded hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition disabled:bg-gray-300"
              >
                Comment
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-sm text-gray-600 mb-3">
              Sign in to participate in the discussion
            </p>
            <a
              href="/auth/signin"
              className="inline-block px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition no-underline font-medium"
            >
              Sign In
            </a>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="space-y-0">
        {articleComments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to share your thoughts!
            </p>
          </div>
        ) : (
          articleComments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              articleId={articleId}
            />
          ))
        )}
      </div>
    </section>
  );
}
