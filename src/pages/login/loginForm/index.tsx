import Logo from '../../../../public/login.svg?react';
import { z } from 'zod';

import { useState } from 'react';

import { LoginBanner } from '@/pages/login/loginButton';
import { Input } from '@/_components';

interface LoginFormProps {
  onSubmit: (data: z.infer<typeof loginSchema>) => void;
}

const loginSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(16)
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      '8글자 이상 16글자 이하로 작성해주세요. 최소 한번의 특수문자가 필요합니다.'
    ),
});

export const LoginForm = (onSubmit: LoginFormProps) => {
  const [formData, setFormData] = useState<z.infer<typeof loginSchema>>({
    name: '',
    email: '',
    password: '',
  });

  return (
    <section className="flex flex-col gap-4 p-5">
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto bg-white rounded-xl shadow-lg">
        <Logo className="w-40 h-40 mt-6" />

        <p className="mt-6 text-2xl font-medium text-LIGHT_SLATE font-bold">
          로그인 하여 즐겨보세요
        </p>

        <div
          style={{
            margin: '0 auto',
          }}
        >
          <Input placeholder="이름" id="name" className="w-[350px]" />
          <Input placeholder="이메일" id="email" className="w-[350px]" />
          <Input placeholder="비밀번호" id="password" className="w-[350px]" />
          <LoginBanner />
        </div>
      </div>
    </section>
  );
};
