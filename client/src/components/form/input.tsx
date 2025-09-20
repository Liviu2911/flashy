type Props = {
  name: string;
  password?: true;
  error?: boolean;
};

function Input({ name, password, error }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        type={password ? "password" : "text"}
        placeholder={name}
        className={
            `${error && "border border-red-500 outline-none"} placeholder:text-stone-700 bg-black rounded-lg px-4 py-3 focus:outline-1 focus:outline-primary transition-all`
        }
      />
    </div>
  );
}

export default Input;
