const AuthLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen bg-slate-600'>
      <div className='w-1/2'>
        <h3>form container </h3>
        {children}
      </div>
      <div className='w-1/2'>auth graphics </div>
    </div>
  );
};
export default AuthLayout;
