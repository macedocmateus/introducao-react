type Props = React.ComponentProps<"button"> & {};

export function Button({ name, onClick }: Props) {
    return <button onClick={onClick}>{name}</button>;
}
