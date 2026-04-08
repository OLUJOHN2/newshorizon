import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ArticleActions {
  likedArticles: Set<string>;
  savedArticles: Set<string>;
  toggleLike: (articleId: string) => void;
  toggleSave: (articleId: string) => void;
  isLiked: (articleId: string) => boolean;
  isSaved: (articleId: string) => boolean;
  getLikeCount: (articleId: string) => number;
  getSaveCount: (articleId: string) => number;
}

export const useArticleActionsStore = create<ArticleActions>()(
  persist(
    (set, get) => ({
      likedArticles: new Set(),
      savedArticles: new Set(),

      toggleLike: (articleId: string) => {
        set((state) => {
          const newLiked = new Set(state.likedArticles);
          if (newLiked.has(articleId)) {
            newLiked.delete(articleId);
          } else {
            newLiked.add(articleId);
          }
          return { likedArticles: newLiked };
        });
      },

      toggleSave: (articleId: string) => {
        set((state) => {
          const newSaved = new Set(state.savedArticles);
          if (newSaved.has(articleId)) {
            newSaved.delete(articleId);
          } else {
            newSaved.add(articleId);
          }
          return { savedArticles: newSaved };
        });
      },

      isLiked: (articleId: string) => {
        return get().likedArticles.has(articleId);
      },

      isSaved: (articleId: string) => {
        return get().savedArticles.has(articleId);
      },

      getLikeCount: (articleId: string) => {
        const baseCount = Math.floor(Math.random() * 50) + 10;
        return get().isLiked(articleId) ? baseCount + 1 : baseCount;
      },

      getSaveCount: (articleId: string) => {
        const baseCount = Math.floor(Math.random() * 20) + 5;
        return get().isSaved(articleId) ? baseCount + 1 : baseCount;
      },
    }),
    {
      name: "article-actions-storage",
      storage: localStorage,
      partialize: (state) => ({
        likedArticles: Array.from(state.likedArticles),
        savedArticles: Array.from(state.savedArticles),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.likedArticles = new Set(state.likedArticles as any);
          state.savedArticles = new Set(state.savedArticles as any);
        }
      },
    },
  ),
);
