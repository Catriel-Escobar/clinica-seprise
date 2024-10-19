'use client';
import SignInLogic from "@/Components/Auth/SinInLogic"; 
import SignInForm from "@/Components/Auth/SingInForm"; 

const SignIn = () => {
  const { credentials, handleChange, handleSubmit, errorMessage } = SignInLogic();

  return (
    <div className="min-h-screen flex items-center justify-center py-[30px] pb-[20px] text-center" style={{ background: "linear-gradient(to right, #87b9a5 0%, #87b9a5 34%, #C4EDED 100%)" }}>
      <div className="w-full max-w-md">
        <SignInForm 
          credentials={credentials} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};
export default SignIn;