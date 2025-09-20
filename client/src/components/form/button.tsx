function Button({ text } : { text: string }) {
  return <button type="submit" className="py-2 w-full rounded text-lg bg-primary hover:opacity-80 text-white mb-24 transition-all cursor-pointer">{text}</button>
}

export default Button;
