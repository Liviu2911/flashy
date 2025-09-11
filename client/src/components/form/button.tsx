function Button({ text } : { text: string }) {
  return <button type="submit" className="px-2 py-1 rounded bg-primary hover:opacity-80 mb-24 transition-all cursor-pointer">{text}</button>
}

export default Button;
