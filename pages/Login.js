import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PostWithoutAuth } from "../services/HttpService";

const Login = () => {
  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (value) => {
        setUsername(value)
    } 

    const handlePassword = (value) => {
        setPassword(value)
    } 

    const sendRequest = (path) => {
        PostWithoutAuth(("/auth/"+path), {
            userName : username, 
            password : password,
          })
          .then((res) => res.json())
          .then((result) => {localStorage.setItem("tokenKey",result.accessToken);
                            localStorage.setItem("refreshKey",result.refreshToken);
                            localStorage.setItem("currentUser",result.userId);
                            localStorage.setItem("userName",username)})
          .catch((err) => console.log(err))
    }

    const handleButton = (path) => {
        sendRequest(path)
        setUsername("")
        setPassword("")
        console.log(localStorage)
    }
  /* const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Backend'e kullanıcı bilgilerini gönder
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Başarılı giriş durumunda ana sayfaya yönlendir
      router.push("/");
    } else {
      // Hata durumunda kullanıcıya bilgi ver
      alert("Giriş işlemi başarısız oldu.");
    }
  }; */

  return (
    <div className="flex justify-center items-center h-screen bg-orange-50">
      <Image
        src="https://user-images.githubusercontent.com/77547962/236570498-030b6651-159b-4296-a1a3-d19aaf3b9cd1.png"
        height={500}
        width={500}
      />

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-2xl">SoupWeb Giriş Yap</h3>
        <div className="body mt-[10px]">
          <form className="flex w-full flex-col justify-center">
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="email">
                E-posta
              </label>
              <input
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
              w-full p-2 border rounded-md"
                type="text"
                name="username"
                id="username"
                required
                placeholder="eposta@soupweb.com"
                value={username}
                /* onChange={(e) => setUsername(e.target.value)} */
                onChange = {(i) => handleUsername(i.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="password">
                Şifre
              </label>
              <input
                className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
              w-full p-2 border rounded-md"
                type="password"
                name="password"
                id="password"
                required
                placeholder="············"
                value={password}
                /* onChange={(e) => setPassword(e.target.value)} */
                onChange = {(i) => handlePassword(i.target.value)}
              />
            </div>
            <div className="p-4">
              <button
                className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-[#edaf32] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 cursor-pointer"
                type="submit"
                onClick={() => handleButton("login")} // Giriş yapma işlemini başlatan fonksiyonu ekledik
              >
                Giriş Yap
              </button>
                veya  
              <a
                onClick={signIn}
                className="border border-gray-300 bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-blue-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                href="http://localhost:3000/#_=_"
              >
                Facebook ile devam edin
              </a>
              <div className="p-2">
                SoupWeb'de yeni misiniz? &nbsp;
                <a
                  href="/Register"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Bir hesap oluşturun.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
