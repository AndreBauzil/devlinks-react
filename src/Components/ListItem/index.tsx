interface Props {
  href: string;
  content: string;
}

export function ListItem({ href, content }: Props) {
  return (
    <li
      className="border-solid border-[var(--text-color)] border rounded-lg bg-[var(--surface-color)] max-w-80 w-full h-fit"
    >
      <a
        className="flex items-center content-center py-4 px-6 bg-[var(--surface-color)] border border-solid border-[var(--stroke-color)] rounded-lg backdrop-blur-sm font-medium no-underline transition-[background] duration-200 hover:bg-[var(--surface-color-hover)] hover:border-solid"
        href={href}
      >{content}</a>
    </li>
  )
}
