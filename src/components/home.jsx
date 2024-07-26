import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "https://669b082e276e45187d347a71.mockapi.io/",
});

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleLogin(data) {
    console.log(data);
  }
  // console.log(watch("uname"));
  useEffect(() => {
    (async () => {
      try {
        let res = await instance.get("/todos", {
          params: {
            page: 2,
            limit: 4,
          },
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <h1>Home Page</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        UName:
        <input {...register("uname")}></input>
        Password:
        <input
          type="password"
          {...register("pass", { required: true, minLength: 8 })}
        ></input>
        {errors.pass && <span> Du lieu khong dung </span>}
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
export default Home;
