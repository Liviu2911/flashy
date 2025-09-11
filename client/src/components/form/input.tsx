type Props = {
  name: string
  password?: true
}

function Input({ name, password } : Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="capitalize font-medium">{name}</label>
      <input
        name={name}
        type={password ? "password" : "text"}
        placeholder={name + "..."}
        className="placeholder:italic placeholder:text-gray-600 border border-stone-400 rounded-lg px-4 py-1.5 outline-none focus:border-stone-200 transition-all"
      />
    </div>
  );
}

export default Input;
