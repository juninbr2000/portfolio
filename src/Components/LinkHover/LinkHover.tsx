import styles from "./LinkHover.module.css";

type Props = {
    children: string;
}

export default function LinkHover({ children }: Props) {

    const letters = children.split("");

    return (
        <span className={styles.link}>
            <span className={styles.top}>
                {letters.map((l, i) => (
                    <span
                        key={i}
                        style={{ "--i": i } as React.CSSProperties}
                    >
                        {l === " " ? "\u00A0" : l}
                    </span>
                ))}
            </span>

            <span className={styles.bottom}>
                {letters.map((l, i) => (
                    <span
                        key={i}
                        style={{ "--i": i } as React.CSSProperties}
                    >
                        {l === " " ? "\u00A0" : l}
                    </span>
                ))}
            </span>
        </span>
    );
}