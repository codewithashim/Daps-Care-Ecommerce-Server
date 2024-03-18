import { z } from 'zod';

export const wishlistValidationSchema = z.object({
  userEmail: z.string(),
  bookId: z.string(),
  bookTitle: z.string(),
  bookAuthor: z.string(),
});

export const createWishListValidator = {
  wishlistValidationSchema,
};
