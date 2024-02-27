import { useRouter } from "next/router"
import styles from "./navbar.module.css"

export default function Navbar(props: any) {
    const router = useRouter()
    function navigate(link: string) {
        return () => { router.push(link)}
    }

    return <div>
                <div className={styles.container}>
                    <div className={styles.item}>ReTekkit</div>
                    <div className={styles.spacer}></div>
                    <div className={styles.item} onClick={navigate("/guide")}>Guide</div>
                    <div className={styles.line}></div>
                    <div className={styles.item} onClick={navigate("/develop")}>Develop</div>
                </div>
                {props.children}
            </div>
}
