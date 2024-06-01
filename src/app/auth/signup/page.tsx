import Button from "@/app/features/auth/components/Button";
import InputFiled from "@/app/features/auth/components/InputFiled";
import React from "react";

const Signup = () => {
  return (
    <div className="mx-auto max-w-sm my-14">
      <h2 className="text-center font-medium text-2xl mb-4">新規登録</h2>
      <form>
        <InputFiled
          label="ユーザー名"
          name="username"
          type="text"
          placeholder="ユーザー名"
        />
        <InputFiled
          label="メールアドレス"
          name="email"
          type="email"
          placeholder="メールアドレス"
        />
        <InputFiled
          label="パスワード"
          name="password"
          type="password"
          placeholder="パスワード"
        />
        <div className="mt-4">
          <Button type="submit" colorClass="bg-blue-500 hover:bg-blue-700">
            新規登録
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
