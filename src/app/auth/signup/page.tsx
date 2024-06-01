import InputFiled from "@/app/features/auth/components/InputFiled";
import React from "react";

const Signup = () => {
  return (
    <div className="mx-auto max-w-sm my-14">
      <h2 className="text-center font-medium text-2xl mb-4">新規登録</h2>
      <form>
        <InputFiled />
        <InputFiled />
        <InputFiled />
        <div className="mt-4">
          <button></button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
