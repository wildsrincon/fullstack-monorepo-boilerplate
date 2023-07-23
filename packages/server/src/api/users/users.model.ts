import * as z from 'zod';

const User = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string().min(3, { message: 'Must be 5 or more characters long' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .max(20, { message: 'Password must be at most 30 characters long.' })
    .regex(
      /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~{}:;?,.<>\-[\]\\/])).{8,20}$/,
      {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
      },
    ),
  role: z.string(),
});

type User = z.infer<typeof User>;

export default User;
