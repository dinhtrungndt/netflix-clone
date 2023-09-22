import { useState, useCallback } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Sign up"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Register"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Creacte an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

// Giải thích css
// bg-[url('/images/hero.jpg')] : background-image: url('/images/hero.jpg'); là thêm ảnh vào background của div đó
// bg-no-repeat : background-repeat: no-repeat; không lặp lại ảnh
// bg-fixed : background-attachment: fixed; ảnh sẽ không bị scroll theo trang web
// bg-cover : background-size: cover; ảnh sẽ được căn chỉnh vừa với kích thước của div
// bg-black : background-color: #000; màu nền đen
// bg-opacity-70 : background-color: rgba(0, 0, 0, 0.7); màu nền đen có độ mờ là 0.7
// px-12 : padding-left: 3rem; padding-right: 3rem;
// py-5 : padding-top: 1.25rem; padding-bottom: 1.25rem;
// h-12 : height: 3rem;
// px-16 : padding-left: 4rem; padding-right: 4rem;
// py-16 : padding-top: 4rem; padding-bottom: 4rem;
// self-center : align-self: center là căn giữa theo chiều dọc
// mt-2 : margin-top: 0.5rem; là căn giữa theo chiều ngang
// lg:w-2/5 : @media (min-width: 1024px) { width: 40%; } là chiều rộng của div là 40% trên màn hình lớn hơn 1024px
// lg:max-w-md : @media (min-width: 1024px) { max-width: 28rem; } là chiều rộng tối đa của div là 28rem trên màn hình lớn hơn 1024px
// rounded-md : border-radius: 0.375rem; là bo tròn các góc của div
// w-full : width: 100%;
// text-4xl : font-size: 2rem; kích thước chữ là 2rem
// mb-8 : margin-bottom: 2rem;
// font-semibold : font-weight: 600; độ đậm của chữ là 600
// flex : display: flex; hiển thị theo kiểu flex
// flex-col : flex-direction: column; hiển thị theo kiểu flex dọc
// gap-4 : gap: 1rem; là khoảng cách giữa các phần tử là 1rem
// text-neutral-500 : color: #9ca3af; màu chữ là #9ca3af
// mt-12 : margin-top: 3rem;
// text-white : color: #fff; màu chữ trắng
// ml-1 : margin-left: 0.25rem;
// hover:underline : hover:underline; khi rê chuột vào thì gạch chân chữ
// cursor-pointer : cursor: pointer; khi rê chuột vào thì con trỏ chuột sẽ thành dấu mũi tên
// bg-red-600 : background-color: #dc2626; màu nền đỏ
// py-3 : padding-top: 0.75rem; padding-bottom: 0.75rem;
// hover:bg-red-700 : hover:bg-red-700; khi rê chuột vào thì màu nền đỏ sẽ đậm hơn
// transition : transition: all 150ms ease-in-out; là hiệu ứng chuyển động
// mt-10 : margin-top: 2.5rem;
