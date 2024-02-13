import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message : 'Too short' }),
    username: z.string().min(2, { message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be at least characters'}),
});

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be at least characters'}),
});