interface Props {
  href: string;
  content: string;
}

export function ListItem({ href, content }: Props) {
  return (
    <li><a href={href}>{content}</a></li>
  )
}
