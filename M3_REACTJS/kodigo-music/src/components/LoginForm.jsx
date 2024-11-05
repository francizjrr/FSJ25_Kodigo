import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
