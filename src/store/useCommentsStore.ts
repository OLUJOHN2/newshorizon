import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: number;
  likes: number;
  replies: Comment[];
}

interface CommentsStore {
  comments: Record<string, Comment[]>;
  addComment: (articleId: string, author: string, content: string) => void;
  deleteComment: (articleId: string, commentId: string) => void;
  addReply: (articleId: string, parentCommentId: string, author: string, content: string) => void;
  likeComment: (articleId: string, commentId: string) => void;
  getComments: (articleId: string) => Comment[];
}

const generateId = () => Math.random().toString(36).substring(2, 11);

const getAvatarUrl = (name: string) => {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `https://i.pravatar.cc/40?img=${hash % 70}`;
};

export const useCommentsStore = create<CommentsStore>()(
  persist(
    (set, get) => ({
      comments: {},

      addComment: (articleId: string, author: string, content: string) => {
        const newComment: Comment = {
          id: generateId(),
          articleId,
          author,
          avatar: getAvatarUrl(author),
          content,
          timestamp: Date.now(),
          likes: 0,
          replies: [],
        };

        set((state) => ({
          comments: {
            ...state.comments,
            [articleId]: [...(state.comments[articleId] || []), newComment],
          },
        }));
      },

      deleteComment: (articleId: string, commentId: string) => {
        set((state) => ({
          comments: {
            ...state.comments,
            [articleId]: (state.comments[articleId] || []).filter(
              (c) => c.id !== commentId
            ),
          },
        }));
      },

      addReply: (articleId: string, parentCommentId: string, author: string, content: string) => {
        const newReply: Comment = {
          id: generateId(),
          articleId,
          author,
          avatar: getAvatarUrl(author),
          content,
          timestamp: Date.now(),
          likes: 0,
          replies: [],
        };

        set((state) => ({
          comments: {
            ...state.comments,
            [articleId]: (state.comments[articleId] || []).map((c) => {
              if (c.id === parentCommentId) {
                return { ...c, replies: [...c.replies, newReply] };
              }
              return c;
            }),
          },
        }));
      },

      likeComment: (articleId: string, commentId: string) => {
        set((state) => ({
          comments: {
            ...state.comments,
            [articleId]: (state.comments[articleId] || []).map((c) => {
              if (c.id === commentId) {
                return { ...c, likes: c.likes + 1 };
              }
              return c;
            }),
          },
        }));
      },

      getComments: (articleId: string) => {
        return get().comments[articleId] || [];
      },
    }),
    {
      name: "comments-storage",
    }
  )
);
