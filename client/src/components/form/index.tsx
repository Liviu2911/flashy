import type { Children } from "../../types/default";

function Form({ children, onSubmit }: { children: Children, onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return <form onSubmit={onSubmit} className="flex flex-col gap-8">{children}</form>;
}

export default Form;
