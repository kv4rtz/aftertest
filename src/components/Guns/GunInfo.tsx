import { IGunsSpecifications } from "@/components/Guns/guns-list"
import styles from './Guns.module.css'
import Image from "next/image"

const GunInfo = ({gun}: {gun: IGunsSpecifications}) => {
    const percent = (min: number, max: number) => {
        if (min === max) return 100;
        return 100 - Math.floor(((max-min)/max)*100)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.spec}>
                <ul className={styles.data}>
                    <li>Damage<div className={styles.scale} style={{"--scale": `${percent(gun.damage, 690)}%`}}></div></li>
                    <li>Range<div className={styles.scale} style={{"--scale": `${percent(gun.range, 17)}%`}}></div></li>
                    <li>Fire rate<div className={styles.scale} style={{"--scale": `${percent(gun.firerate, 750)}%`}}></div></li>
                    <li>Accuracy<div className={styles.scale} style={{"--scale": `${percent(gun.accuracy, 76)}%`}}></div></li>
                    <li>Recoil<div className={styles.scale} style={{"--scale": `${percent(gun.recoil, 100)}%`}}></div></li>
                </ul>
                <div className={styles.rounds}><p>Rounds</p><p>{gun.rounds}</p></div>
            </div>
            <Image width={620} height={255} src={'/' + gun.img} alt={gun.name} />
        </div>
    )
}

export default GunInfo
