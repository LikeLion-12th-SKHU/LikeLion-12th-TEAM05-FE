import { z } from 'zod';

import { useState } from 'react';
import { LoginBanner } from '@/pages/login/loginButton';

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
    <section className="d-flex flex-column justify-content-center align-items-center">
      <div className="gap-10 flex flex-col w-[500px] h-[500px] justify-center rounded-xl items-center mx-auto bg-WHITE my-[25px]">
        <p className="text-LIGHT_SLATE text-2xl">로그인 하여 즐겨보세요</p>

        <div className="flex gap-[10px]">
          <LoginBanner />
        </div>
      </div>
    </section>
  );
};
