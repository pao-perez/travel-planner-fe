interface TextDisplayProps {
  readonly content: string;
}

export default function TextDisplay({content}: TextDisplayProps) {
  return <p className="text-center text-gray-600">{content}</p>;
}
